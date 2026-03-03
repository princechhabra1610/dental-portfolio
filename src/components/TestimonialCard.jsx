import { motion } from "framer-motion";
import { useState } from "react";

export default function TestimonialCard({ name, text, rating, location, image }) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group overflow-hidden"
        >
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative bg-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-soft group-hover:shadow-lg transition-all duration-500 border border-borderSoft group-hover:border-primary-200">
                {/* Quote Icon */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 3 : 0,
                    }}
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <span className="text-primary-600 text-base sm:text-lg">“</span>
                </motion.div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            className={`text-base sm:text-lg ${
                                i < rating 
                                    ? 'text-yellow-400' 
                                    : 'text-gray-200'
                            }`}
                        >
                            ★
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-sm sm:text-base text-body leading-relaxed mb-4 sm:mb-6 italic relative">
                    <span className="text-primary-400 text-xl sm:text-2xl absolute -left-1 sm:-left-2 -top-1 sm:-top-2">“</span>
                    <span className="relative z-10">{text}</span>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {image && (
                        <motion.div
                            animate={{
                                scale: isHovered ? 1.05 : 1,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-primary-200 shadow-soft">
                                <img 
                                    src={image} 
                                    alt={name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-secondary-500 rounded-full border-2 border-white"></div>
                        </motion.div>
                    )}
                    
                    <div className="flex-1">
                        <h4 className="font-bold text-sm sm:text-base text-heading group-hover:text-primary-600 transition-colors duration-300">
                            {name}
                        </h4>
                        {location && (
                            <p className="text-xs sm:text-sm text-body opacity-80">
                                {location}
                            </p>
                        )}
                    </div>
                    
                    {/* Verified Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: isHovered ? 1 : 0.7,
                            scale: isHovered ? 1 : 0.9,
                        }}
                        className="flex items-center gap-1 text-xs font-medium text-secondary-600 bg-secondary-50 px-2 py-1 rounded-full"
                    >
                        <span className="text-secondary-500">✓</span>
                        Verified
                    </motion.div>
                </div>

                {/* Subtle shine effect */}
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{
                        x: isHovered ? '100%' : '-100%',
                        opacity: isHovered ? 0.1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300 to-transparent transform -skew-x-12 pointer-events-none"
                />
            </div>
        </motion.div>
    );
}