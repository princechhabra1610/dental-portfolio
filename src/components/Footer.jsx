import { motion } from "framer-motion";
import { 
    FaPhone, 
    FaEnvelope, 
    FaMapMarkerAlt, 
    FaClock,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaTooth,
    FaCalendarAlt,
    FaShieldAlt
} from "react-icons/fa";

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const socialIcons = [
        { Icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:text-blue-600" },
        { Icon: FaTwitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
        { Icon: FaInstagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
        { Icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "hover:text-blue-700" }
    ];

    const services = [
        "General Dentistry",
        "Cosmetic Dentistry", 
        "Root Canal Therapy",
        "Dental Implants",
        "Professional Whitening",
        "Invisalign Treatment",
        "Emergency Care"
    ];

    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Book Appointment", href: "#consultation" }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 text-6xl transform rotate-12">
                    <FaTooth />
                </div>
                <div className="absolute top-32 right-20 text-4xl transform -rotate-45">
                    <FaTooth />
                </div>
                <div className="absolute bottom-20 left-1/4 text-5xl transform rotate-45">
                    <FaTooth />
                </div>
                <div className="absolute bottom-10 right-10 text-3xl">
                    <FaTooth />
                </div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8 relative z-10"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                                <FaTooth className="text-xl sm:text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl sm:text-2xl text-white">
                                    Dr. Aris Thorne, MDS
                                </h3>
                                <p className="text-slate-400 text-sm">Premium Dental Care</p>
                            </div>
                        </div>
                        
                        <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            Dedicated to providing exceptional dental care with state-of-the-art technology 
                            and a gentle, patient-focused approach.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                            {socialIcons.map(({ Icon, href, label, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-9 h-9 sm:w-10 sm:h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-300 ${color} transition-all duration-300`}
                                    aria-label={label}
                                >
                                    <Icon className="text-sm" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-white flex items-center gap-2">
                            <FaShieldAlt className="text-primary-400" />
                            Our Services
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {services.map((service, index) => (
                                <motion.li 
                                    key={service}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-slate-300 hover:text-primary-400 transition-colors cursor-pointer flex items-center gap-2 text-sm sm:text-base"
                                >
                                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                                    {service}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-white flex items-center gap-2">
                            <FaCalendarAlt className="text-secondary-400" />
                            Quick Links
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a 
                                        href={link.href}
                                        className="text-slate-300 hover:text-secondary-400 transition-colors flex items-center gap-2 group text-sm sm:text-base"
                                    >
                                        <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full group-hover:scale-125 transition-transform"></div>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-white">Contact Info</h4>
                        <div className="space-y-3 sm:space-y-4">
                            <motion.div 
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-2 sm:gap-3 text-slate-300"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <FaMapMarkerAlt className="text-primary-400 text-sm" />
                                </div>
                                <div>
                                    <p className="font-medium text-white text-sm sm:text-base">Address</p>
                                    <p className="text-xs sm:text-sm">123 Dental Street<br />Seattle, WA 98101</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-2 sm:gap-3 text-slate-300"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <FaPhone className="text-secondary-400 text-sm" />
                                </div>
                                <div>
                                    <p className="font-medium text-white text-sm sm:text-base">Phone</p>
                                    <a href="tel:+12065550123" className="text-xs sm:text-sm hover:text-secondary-400 transition-colors">
                                        (206) 555-SMILE
                                    </a>
                                    <p className="text-xs text-slate-400">24/7 Emergency Line</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-2 sm:gap-3 text-slate-300"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <FaEnvelope className="text-primary-400 text-sm" />
                                </div>
                                <div>
                                    <p className="font-medium text-white text-sm sm:text-base">Email</p>
                                    <a href="mailto:info@drthorne.com" className="text-xs sm:text-sm hover:text-primary-400 transition-colors">
                                        info@drthorne.com
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Office Hours */}
                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-800 rounded-xl border border-slate-700">
                            <h5 className="font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                                <FaClock className="text-secondary-400" />
                                Office Hours
                            </h5>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-300">Mon - Fri</span>
                                    <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-300">Saturday</span>
                                    <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-300">Sunday</span>
                                    <span className="text-slate-400">Emergency Only</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-slate-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4"
                >
                    <div className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
                        <p>© 2026 Dr. Aris Thorne Dental Practice. All rights reserved.</p>
                        <p className="mt-1">Licensed Dental Professional | State License #DDS12345</p>
                    </div>
                    <div className="flex gap-4 sm:gap-6 text-slate-400 text-xs sm:text-sm">
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}