import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#results", label: "Results" },
        { href: "#reviews", label: "Reviews" }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-card/95 backdrop-blur-lg shadow-lg border-b border-borderSoft'
                        : 'bg-card/70 backdrop-blur-md'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer"
                        >
                            <h1 className="font-bold text-2xl bg-dental-gradient bg-clip-text text-transparent">
                                Dr. Aris Thorne
                            </h1>
                            <p className="text-xs text-body">Premium Dental Care</p>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-heading hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105 relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dental-gradient transition-all duration-300 group-hover:w-full"></span>
                                </motion.a>
                            ))}
                            <motion.a
                                href="#consultation"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ y: -2 }}
                                className="relative overflow-hidden font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10">Book Consultation</span>
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setOpen(!open)}
                            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
                        >
                            <motion.span
                                animate={{
                                    rotate: open ? 45 : 0,
                                    y: open ? 0 : -4,
                                }}
                                className="w-6 h-0.5 bg-heading transition-all duration-300 absolute"
                            />
                            <motion.span
                                animate={{
                                    opacity: open ? 0 : 1,
                                }}
                                className="w-6 h-0.5 bg-heading transition-all duration-300 absolute"
                            />
                            <motion.span
                                animate={{
                                    rotate: open ? -45 : 0,
                                    y: open ? 0 : 4,
                                }}
                                className="w-6 h-0.5 bg-heading transition-all duration-300 absolute"
                            />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-heading/20 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-card shadow-2xl z-50 lg:hidden"
                    >
                        <div className="p-6 pt-20">
                            <div className="space-y-6">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setOpen(false)}
                                        className="block text-xl font-medium text-heading hover:text-primary-500 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <div className="pt-4">
                                    <motion.a
                                        href="#consultation"
                                        whileTap={{ scale: 0.95 }}
                                        whileHover={{ y: -2 }}
                                        onClick={() => setOpen(false)}
                                        className="block w-full text-center relative overflow-hidden font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 px-6 py-3 text-base rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow hover:shadow-lg hover:scale-105 active:scale-95"
                                    >
                                        <span className="relative z-10">Book Consultation</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}