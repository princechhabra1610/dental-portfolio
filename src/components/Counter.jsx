import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Counter({ end, label, suffix = "+", className = "" }) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    
                    let start = 0;
                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);

                    // Cleanup function
                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.3, rootMargin: '50px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [end, hasStarted]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hasStarted ? 1 : 0, y: hasStarted ? 0 : 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative group ${className}`}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative text-center p-4">
                <motion.div
                    animate={{ scale: hasStarted ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-2"
                >
                    <span className="text-3xl md:text-4xl font-bold bg-dental-gradient bg-clip-text text-transparent">
                        {count.toLocaleString()}{suffix}
                    </span>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hasStarted ? 1 : 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-sm font-medium text-body uppercase tracking-wide"
                >
                    {label}
                </motion.p>
                
                {/* Subtle accent line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hasStarted ? "60%" : 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-2 rounded-full"
                />
            </div>
        </motion.div>
    );
}