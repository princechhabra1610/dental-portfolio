import { motion } from "framer-motion";
import Container from "../components/Container";
import { testimonials } from "../data/Testimonial";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Testimonials() {
    return (
        <section id="reviews" className="relative py-16 sm:py-20 lg:py-24 bg-backgroundSoft overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{animationDelay: '2s'}} />
            </div>

            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full border border-primary-100 mb-6"
                    >
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce-subtle"></div>
                        <span className="text-primary-600 font-medium">Patient Reviews</span>
                    </motion.div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
                        What Our{" "}
                        <span className="bg-dental-gradient bg-clip-text text-transparent">
                            Patients Say
                        </span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed">
                        Real stories from real patients who trusted us with their smile transformations.
                        See why Seattle Smile Studio is the city's most trusted dental practice.
                    </p>
                </motion.div>

                {/* Premium Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
                >
                    {[
                        { icon: "⭐", number: "4.9/5", label: "Average Rating" },
                        { icon: "👥", number: "1,200+", label: "Reviews" },
                        { icon: "🏆", number: "99%", label: "Satisfaction" },
                        { icon: "📅", number: "12+", label: "Years Experience" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="text-center p-3 sm:p-4 bg-card rounded-2xl shadow-soft border border-borderSoft hover:shadow-glow hover:border-primary-200 transition-all duration-300"
                        >
                            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{stat.icon}</div>
                            <div className="text-xl sm:text-2xl font-bold text-heading mb-1">{stat.number}</div>
                            <div className="text-xs sm:text-sm text-body">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enhanced Testimonial Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative"
                >
                    <TestimonialCarousel 
                        testimonials={testimonials}
                        autoPlay={true}
                        autoPlayInterval={6000}
                    />
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <p className="text-body mb-4 sm:mb-6 text-sm sm:text-base">Trusted by leading platforms</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-500 text-lg sm:text-xl">★</span>
                            <span className="font-semibold text-sm sm:text-base">Google Reviews</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-borderSoft"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500 text-lg sm:text-xl">📘</span>
                            <span className="font-semibold text-sm sm:text-base">Facebook</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-borderSoft"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500 text-lg sm:text-xl">📍</span>
                            <span className="font-semibold text-sm sm:text-base">Yelp</span>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}