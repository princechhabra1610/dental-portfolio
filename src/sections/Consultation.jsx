import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "../components/Container";
import Button from "../components/Button";

export default function Consultation() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitProgress, setSubmitProgress] = useState(0);

    // Validation functions
    const validateName = (name) => {
        if (!name.trim()) return "Full name is required";
        if (name.trim().length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(name)) return "Name can only contain letters and spaces";
        return null;
    };

    const validatePhone = (phone) => {
        if (!phone.trim()) return "Phone number is required";
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
        if (!phoneRegex.test(cleanPhone)) return "Please enter a valid phone number";
        if (cleanPhone.length < 10) return "Phone number must be at least 10 digits";
        return null;
    };

    const validateEmail = (email) => {
        if (!email.trim()) return "Email address is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return "Please enter a valid email address";
        return null;
    };

    const validateDate = (date) => {
        if (!date) return null; // Optional field
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) return "Please select a future date";
        return null;
    };

    const validateForm = () => {
        const newErrors = {};
        
        const nameError = validateName(formData.name);
        if (nameError) newErrors.name = nameError;
        
        const phoneError = validatePhone(formData.phone);
        if (phoneError) newErrors.phone = phoneError;
        
        const emailError = validateEmail(formData.email);
        if (emailError) newErrors.email = emailError;
        
        const dateError = validateDate(formData.date);
        if (dateError) newErrors.date = dateError;
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Mock email sending function
    const sendEmailTodentist = async (data) => {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Email sent to dentist:', {
                    to: 'dr.thorne@dentalclinic.com',
                    subject: 'New Consultation Request',
                    body: `
                        New consultation request received:
                        
                        Patient Information:
                        Name: ${data.name}
                        Phone: ${data.phone}
                        Email: ${data.email}
                        
                        Appointment Details:
                        Service: ${data.service || 'Not specified'}
                        Preferred Date: ${data.date || 'Not specified'}
                        Preferred Time: ${data.time || 'Not specified'}
                        
                        Message: ${data.message || 'None'}
                        
                        Submitted: ${new Date().toLocaleString()}
                    `
                });
                resolve();
            }, 2000);
        });
    };



    // Check for pre-selected service from ServiceCard
    useEffect(() => {
        const handleServiceSelection = (e) => {
            const service = e ? e.detail.service : localStorage.getItem('selectedService');
            if (service) {
                updateSelectedService(service);
            }
        };

        const updateSelectedService = (service) => {
            // Map service names to form values
            const serviceMap = {
                'General Dentistry': 'consultation',
                'Cosmetic Dentistry': 'cosmetic',
                'Root Canal Therapy': 'root-canal',
                'Dental Implants': 'implants',
                'Professional Whitening': 'whitening',
                'Invisalign Treatment': 'invisalign'
            };
            
            setFormData(prev => ({
                ...prev,
                service: serviceMap[service] || 'consultation'
            }));
            
            // Clear the selected service from localStorage
            localStorage.removeItem('selectedService');
            
            // Add visual feedback - highlight the selected service
            setTimeout(() => {
                const serviceSelect = document.querySelector('select[name="service"]');
                if (serviceSelect) {
                    serviceSelect.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.3)';
                    setTimeout(() => {
                        serviceSelect.style.boxShadow = '';
                    }, 2000);
                }
            }, 100);
        };

        // Check localStorage on mount
        handleServiceSelection();
        
        // Listen for custom service selection events
        window.addEventListener('serviceSelected', handleServiceSelection);
        
        return () => {
            window.removeEventListener('serviceSelected', handleServiceSelection);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        setSubmitProgress(0);
        
        try {
            // Animate progress
            const progressInterval = setInterval(() => {
                setSubmitProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        return 100;
                    }
                    return prev + 2;
                });
            }, 40);
            
            await sendEmailTodentist(formData);
            
            // Ensure progress reaches 100%
            setSubmitProgress(100);
            
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                
                // Reset form after showing success
                setTimeout(() => {
                    if (isSubmitted) {
                        setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            service: '',
                            date: '',
                            time: '',
                            message: ''
                        });
                        setErrors({});
                    }
                }, 5000);
            }, 500);
            
        } catch (error) {
            console.error('Submission error:', error);
            setIsSubmitting(false);
            setSubmitProgress(0);
            
            setErrors({ submit: 'Failed to submit request. Please try again.' });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    return (
        <section id="consultation" className="relative py-16 sm:py-20 lg:py-24 bg-dental-gradient overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}} />
            </div>

            <Container>
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-white space-y-6 sm:space-y-8 text-center lg:text-left order-1">
                    
                        <div className="space-y-4 sm:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                            >
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce-subtle"></div>
                                <span className="font-medium text-sm sm:text-base">Book Your Visit</span>
                            </motion.div>
                            
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                Schedule Your{" "}
                                <span className="text-white/90">
                                    Consultation
                                </span>
                            </h2>
                            
                            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Ready to transform your smile? Book your personalized consultation 
                                and discover how we can help you achieve the perfect smile you've always wanted.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-3 sm:space-y-4">
                            {[
                                "🆓 Complimentary consultation",
                                "📋 Comprehensive smile assessment",
                                "💰 Personalized treatment plan",
                                "🎯 No-pressure environment",
                                "⚡ Same-day emergency appointments"
                            ].map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-2 sm:gap-3 text-white/90 text-sm sm:text-base justify-center lg:justify-start"
                                >
                                    <span className="text-base sm:text-lg">{benefit.split(' ')[0]}</span>
                                    <span>{benefit.substring(2)}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                        >
                            <h3 className="font-bold mb-4">Prefer to Call?</h3>
                            <div className="space-y-2">
                                <p className="flex items-center gap-2">
                                    <span>📞</span> (206) 555-SMILE
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>📍</span> 123 Dental Avenue, Seattle, WA
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>🕒</span> Mon-Fri 8AM-6PM, Sat 9AM-3PM
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2"
                    >
                        <div className="bg-card p-8 rounded-3xl shadow-2xl border border-borderSoft">
                            {isSubmitting ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    {/* Circular Progress with Tick */}
                                    <div className="relative inline-block mb-6">
                                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                            {/* Background Circle */}
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                stroke="#e2e8f0"
                                                strokeWidth="6"
                                                fill="transparent"
                                            />
                                            {/* Progress Circle */}
                                            <motion.circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                stroke="url(#gradient)"
                                                strokeWidth="6"
                                                fill="transparent"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: submitProgress / 100 }}
                                                transition={{ duration: 0.1, ease: "easeOut" }}
                                                style={{
                                                    strokeDasharray: "283",
                                                    strokeDashoffset: 283 - (283 * submitProgress) / 100
                                                }}
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#0891b2" />
                                                    <stop offset="100%" stopColor="#10b981" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        
                                        {/* Tick Mark */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ 
                                                    scale: submitProgress === 100 ? 1 : 0,
                                                    opacity: submitProgress === 100 ? 1 : 0 
                                                }}
                                                transition={{ delay: 0.2 }}
                                                className="text-secondary-500 text-3xl font-bold"
                                            >
                                                ✓
                                            </motion.div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-heading mb-2">
                                        {submitProgress < 100 ? 'Sending Request...' : 'Sent Successfully!'}
                                    </h3>
                                    <p className="text-body">
                                        {submitProgress < 100 
                                            ? 'Please wait while we process your consultation request.' 
                                            : 'Your request has been sent to our team.'
                                        }
                                    </p>
                                </motion.div>
                            ) : !isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-heading mb-2">
                                            Book Your Appointment
                                        </h3>
                                        <p className="text-body">Fill out the form below and we'll contact you within 24 hours</p>
                                    </div>

<div className="grid md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1 sm:space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-heading">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John Doe"
                                className={`w-full p-3 sm:p-4 text-sm sm:text-base border rounded-xl focus:ring-2 focus:ring-primary-100 transition-colors bg-backgroundSoft ${
                                    errors.name 
                                        ? 'border-red-500 focus:border-red-500' 
                                        : 'border-borderSoft focus:border-primary-500'
                                }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs flex items-center gap-1">
                                    <span>⚠️</span> {errors.name}
                                </p>
                            )}
                        </div>
                        
                        <div className="space-y-1 sm:space-y-2">
                            <label className="text-xs sm:text-sm font-medium text-heading">Phone Number *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="(206) 555-0123"
                                className={`w-full p-3 sm:p-4 text-sm sm:text-base border rounded-xl focus:ring-2 focus:ring-primary-100 transition-colors bg-backgroundSoft ${
                                                    errors.phone 
                                                        ? 'border-red-500 focus:border-red-500' 
                                                        : 'border-borderSoft focus:border-primary-500'
                                                }`}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-xs flex items-center gap-1">
                                                    <span>⚠️</span> {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>

<div className="space-y-1 sm:space-y-2">
                        <label className="text-xs sm:text-sm font-medium text-heading">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className={`w-full p-3 sm:p-4 text-sm sm:text-base border rounded-xl focus:ring-2 focus:ring-primary-100 transition-colors bg-backgroundSoft ${
                                                errors.email 
                                                    ? 'border-red-500 focus:border-red-500' 
                                                    : 'border-borderSoft focus:border-primary-500'
                                            }`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs flex items-center gap-1">
                                                <span>⚠️</span> {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-heading">Service Interested In</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full p-4 border border-borderSoft rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-colors bg-backgroundSoft"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="consultation">General Dentistry</option>
                                            <option value="cosmetic">Cosmetic Dentistry</option>
                                            <option value="root-canal">Root Canal Therapy</option>
                                            <option value="implants">Dental Implants</option>
                                            <option value="whitening">Professional Whitening</option>
                                            <option value="invisalign">Invisalign Treatment</option>
                                        </select>
                                        {formData.service && (
                                            <p className="text-xs text-primary-600 flex items-center gap-1">
                                                <span>✓</span> Great choice! We'll discuss this service during your consultation.
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-heading">Preferred Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                min={new Date().toISOString().split('T')[0]}
                                                className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary-100 transition-colors bg-backgroundSoft ${
                                                    errors.date 
                                                        ? 'border-red-500 focus:border-red-500' 
                                                        : 'border-borderSoft focus:border-primary-500'
                                                }`}
                                            />
                                            {errors.date && (
                                                <p className="text-red-500 text-xs flex items-center gap-1">
                                                    <span>⚠️</span> {errors.date}
                                                </p>
                                            )}
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-heading">Preferred Time</label>
                                            <select
                                                name="time"
                                                value={formData.time}
                                                onChange={handleInputChange}
                                                className="w-full p-4 border border-borderSoft rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-colors bg-backgroundSoft"
                                            >
                                                <option value="">Select time...</option>
                                                <option value="9am">9:00 AM</option>
                                                <option value="11am">11:00 AM</option>
                                                <option value="1pm">1:00 PM</option>
                                                <option value="3pm">3:00 PM</option>
                                                <option value="5pm">5:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-heading">Message (Optional)</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your concerns or questions..."
                                            rows="4"
                                            className="w-full p-4 border border-borderSoft rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-colors bg-backgroundSoft resize-none"
                                        />
                                    </div>

                                    {errors.submit && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                            <p className="text-red-600 text-sm flex items-center gap-2">
                                                <span>⚠️</span> {errors.submit}
                                            </p>
                                        </div>
                                    )}

                                    <Button 
                                        variant="gradient" 
                                        size="lg" 
                                        className="w-full"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        📅 Schedule My Consultation
                                    </Button>
                                    
                                    <p className="text-xs text-center text-body">
                                        By submitting this form, you agree to receive communications from our office. 
                                        We respect your privacy and never share your information.
                                    </p>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mb-6 mx-auto"
                                    >
                                        <div className="text-4xl text-secondary-600">✓</div>
                                    </motion.div>
                                    
                                    <h3 className="text-2xl font-bold text-heading mb-4">
                                        We've Received Your Request!
                                    </h3>
                                    <p className="text-body mb-6 max-w-md mx-auto">
                                        Thank you for choosing Seattle Smile Studio. Our team will reach out to you soon to confirm your consultation appointment.
                                    </p>
                                    
                                    <div className="bg-primary-50 p-4 rounded-xl border border-primary-200 mb-6">
                                        <p className="text-primary-700 text-sm font-medium">
                                            📧 Confirmation details sent to: {formData.email}
                                        </p>
                                    </div>
                                    
                                    <Button 
                                        onClick={() => setIsSubmitted(false)} 
                                        variant="secondary"
                                        size="sm"
                                    >
                                        Submit Another Request
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}