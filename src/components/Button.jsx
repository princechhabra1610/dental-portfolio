import { motion } from "framer-motion";

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {
    const baseStyles = "relative overflow-hidden font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const sizes = {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-base rounded-xl",
        lg: "px-8 py-4 text-lg rounded-2xl",
    };
    
    const variants = {
        primary: "bg-dental-gradient text-white shadow-glow hover:shadow-lg hover:scale-105 active:scale-95",
        secondary: "bg-card border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:border-primary-600 hover:scale-105 active:scale-95 shadow-soft",
        outline: "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:scale-105 active:scale-95",
        ghost: "bg-transparent text-primary-600 hover:bg-primary-50 hover:scale-105 active:scale-95",
        gradient: "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow hover:shadow-lg hover:scale-105 active:scale-95"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
            className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {/* Shimmer effect for primary buttons */}
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full"
                    animate={{
                        translateX: ['100%', '200%'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear",
                    }}
                />
            )}
        </motion.button>
    );
}