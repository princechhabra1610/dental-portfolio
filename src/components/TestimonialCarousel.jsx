import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

export default function TestimonialCarousel({ testimonials, autoPlay = true, autoPlayInterval = 5000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-play functionality - always enabled
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [currentIndex, autoPlayInterval]);

    // Navigation functions
    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
    };

    return (
        <div className="relative w-full">
            {/* Main Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[300px] sm:min-h-[400px]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.3 }
                        }}
                        className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8"
                    >
                        <div className="w-full max-w-2xl mx-auto">
                            <TestimonialCard {...testimonials[currentIndex]} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8">
                {/* Previous Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-card border-2 border-primary-200 rounded-full shadow-soft hover:shadow-glow hover:border-primary-400 transition-all duration-300 flex items-center justify-center"
                >
                    <motion.span
                        animate={{ x: [-2, 0, -2] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-primary-600 text-lg sm:text-xl font-bold"
                    >
                        ←
                    </motion.span>
                </motion.button>

                {/* Dot Indicators */}
                <div className="flex gap-2 sm:gap-3">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="relative"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-primary-500 shadow-glow'
                                    : 'bg-primary-200 hover:bg-primary-300'
                            }`} />
                            
                            {/* Active indicator with pulse */}
                            {index === currentIndex && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500"
                                >
                                    <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-30" />
                                </motion.div>
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Next Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-card border-2 border-primary-200 rounded-full shadow-soft hover:shadow-glow hover:border-primary-400 transition-all duration-300 flex items-center justify-center"
                >
                    <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-primary-600 text-lg sm:text-xl font-bold"
                    >
                        →
                    </motion.span>
                </motion.button>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-primary-100 rounded-full h-1">
                <motion.div
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
                    className="h-1 bg-dental-gradient rounded-full"
                />
            </div>

            {/* Testimonial Count */}
            <div className="text-center mt-3 sm:mt-4">
                <span className="text-xs sm:text-sm font-medium text-body">
                    {currentIndex + 1} of {testimonials.length} patient reviews
                </span>
            </div>

        </div>
    );
}