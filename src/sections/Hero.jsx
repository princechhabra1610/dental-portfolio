import { motion } from "framer-motion";
import Counter from "../components/Counter";
import Button from "../components/Button";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 bg-hero-gradient overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 sm:space-y-8 text-center lg:text-left"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full border border-primary-100"
                        >
                            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce-subtle"></div>
                            <span className="text-primary-600 text-sm font-medium">Premium Dental Care</span>
                        </motion.div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
                            Creating{" "}
                            <span className="bg-dental-gradient bg-clip-text text-transparent">
                                Confident Smiles
                            </span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-body max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Experience world-class dental care with cutting-edge technology and a gentle touch. 
                            Your perfect smile awaits.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.a
                            href="#consultation"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ y: -2 }}
                            className="relative overflow-hidden font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow hover:shadow-lg hover:scale-105 active:scale-95 text-center"
                        >
                            <span className="relative z-10">📞 Book Consultation</span>
                        </motion.a>
                        <motion.a
                            href="#results"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ y: -2 }}
                            className="relative overflow-hidden font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-2xl bg-card border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:border-primary-600 hover:scale-105 active:scale-95 shadow-soft text-center"
                        >
                            <span className="relative z-10">🎥 View Our Work</span>
                        </motion.a>
                    </motion.div>

                    {/* Enhanced Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 justify-items-center"
                    >
                        <div className="text-center">
                            <Counter end={12} label="Years Experience" className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading" />
                        </div>
                        <div className="text-center">
                            <Counter end={5000} label="Happy Patients" className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading" />
                        </div>
                        <div className="text-center">
                            <Counter end={99} label="Success Rate" className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative order-first lg:order-last mt-8 lg:mt-0"
                >
                    <div className="relative group">
                        {/* Gradient border */}
                        <div className="absolute -inset-1 bg-dental-gradient rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                        
                        <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            src="hero image.png"
                            alt="Professional dental practice"
                            className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                        />
                        
                        {/* Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-card p-2 sm:p-4 rounded-2xl shadow-lg border border-borderSoft animate-float"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                                    <span className="text-secondary-600 text-sm sm:text-lg">⭐</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-heading text-sm sm:text-base">4.9/5 Rating</div>
                                    <div className="text-xs sm:text-sm text-body">1,200+ Reviews</div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.8 }}
                            className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-card p-2 sm:p-4 rounded-2xl shadow-lg border border-borderSoft animate-float"
                            style={{animationDelay: '1s'}}
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                    <span className="text-primary-600 text-sm sm:text-lg">📅</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-heading text-sm sm:text-base">Same Day</div>
                                    <div className="text-xs sm:text-sm text-body">Appointments</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}