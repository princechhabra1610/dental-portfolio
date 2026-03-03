import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServiceCard({ title, desc, icon, features = [] }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    // Detect scrolling to disable hover effects during scroll
    useEffect(() => {
        let scrollTimer = null;

        const handleScroll = () => {
            setIsScrolling(true);
            
            // Clear existing timer
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }

            // Set timer to detect when scrolling stops
            scrollTimer = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }
        };
    }, []);

    const getServiceIcon = (title) => {
        const icons = {
            'General Dentistry': '🦷',
            'Cosmetic Dentistry': '✨',
            'Root Canal Therapy': '🔧',
            'Dental Implants': '💪',
            'Professional Whitening': '😁',
            'Invisalign Treatment': '🔄',
        };
        return icons[title] || '👦';
    };

    const handleLearnMore = () => {
        console.log('Button clicked for service:', title);
        
        // Store selected service with timestamp for better detection
        localStorage.setItem('selectedService', title);
        localStorage.setItem('serviceSelectionTime', Date.now().toString());
        
        // Trigger immediate custom event for form update
        window.dispatchEvent(new CustomEvent('serviceSelected', { 
            detail: { service: title } 
        }));
        
        // Bypass all CSS smooth scroll and use direct DOM manipulation
        setTimeout(() => {
            console.log('Attempting to scroll...');
            
            const consultationSection = document.getElementById('consultation');
            console.log('Found consultation section:', consultationSection);
            
            if (consultationSection) {
                // Temporarily disable smooth scroll behavior
                const originalScrollBehavior = document.documentElement.style.scrollBehavior;
                document.documentElement.style.scrollBehavior = 'auto';
                
                console.log('Disabled smooth scroll, attempting immediate scroll...');
                
                // Get exact position
                const rect = consultationSection.getBoundingClientRect();
                const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
                const targetY = rect.top + currentScrollY - 80;
                
                console.log('Current scroll:', currentScrollY);
                console.log('Target scroll:', targetY);
                console.log('Rect top:', rect.top);
                
                // Multiple scroll attempts with different methods
                console.log('Method 1: document.documentElement.scrollTop');
                document.documentElement.scrollTop = targetY;
                
                setTimeout(() => {
                    console.log('Method 2: document.body.scrollTop');
                    document.body.scrollTop = targetY;
                    
                    setTimeout(() => {
                        console.log('Method 3: window.scrollTo direct');
                        window.scrollTo(0, targetY);
                        
                        // Restore original scroll behavior and add smooth finish
                        setTimeout(() => {
                            document.documentElement.style.scrollBehavior = originalScrollBehavior;
                            console.log('Scroll behavior restored, final position:', window.pageYOffset);
                        }, 100);
                    }, 50);
                }, 50);
                
            } else {
                console.log('Consultation section not found!');
            }
        }, 100);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={!isScrolling ? { 
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            } : {}}
            onHoverStart={() => !isScrolling && setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`group relative overflow-hidden ${isScrolling ? 'pointer-events-none' : ''}`}
        >
            {/* Background with gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative bg-card p-4 sm:p-6 lg:p-8 rounded-3xl shadow-soft group-hover:shadow-lg transition-all duration-500 border border-borderSoft group-hover:border-primary-200">
                {/* Service Icon */}
                <motion.div
                    animate={{
                        scale: (isHovered && !isScrolling) ? 1.1 : 1,
                        rotate: (isHovered && !isScrolling) ? 5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl mb-4 sm:mb-6 group-hover:shadow-glow"
                >
                    <span className="text-xl sm:text-2xl">{icon || getServiceIcon(title)}</span>
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-heading group-hover:text-primary-600 transition-colors duration-300">
                        {title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-body leading-relaxed">
                        {desc}
                    </p>

                    {/* Features List */}
                    {features.length > 0 && (
                        <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                                opacity: (isHovered && !isScrolling) ? 1 : 0,
                                height: (isHovered && !isScrolling) ? 'auto' : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2 overflow-hidden"
                        >
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-body">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                                    {feature}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: (isHovered && !isScrolling) ? 1 : 0,
                        y: (isHovered && !isScrolling) ? 0 : 10,
                    }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 pt-4 border-t border-borderSoft"
                >
                    <button 
                        onClick={handleLearnMore}
                        className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group/btn w-full justify-center py-2 px-3 sm:px-4 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-100 text-sm sm:text-base"
                    >
                        <span>Book {title}</span>
                        <motion.span
                            animate={{ x: (isHovered && !isScrolling) ? 4 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            📅
                        </motion.span>
                    </button>
                </motion.div>

                {/* Subtle shine effect */}
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{
                        x: (isHovered && !isScrolling) ? '100%' : '-100%',
                        opacity: (isHovered && !isScrolling) ? 0.1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300 to-transparent transform -skew-x-12 pointer-events-none"
                />
            </div>
        </motion.div>
    );
}