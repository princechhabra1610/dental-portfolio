import { motion } from "framer-motion";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
    return (
        <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-backgroundSoft overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '3s'}}></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <span className="text-primary-600 font-medium">Our Services</span>
                    </motion.div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
                        Professional{" "}
                        <span className="bg-dental-gradient bg-clip-text text-transparent">
                            Dental Care
                        </span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed">
                        Experience comprehensive dental services with state-of-the-art technology 
                        and personalized care tailored to your unique needs.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-center mt-16"
                >
                    {/* <div className="inline-flex flex-col sm:flex-row gap-4">
                        <button className="bg-dental-gradient text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-glow hover:shadow-lg">
                            📞 Schedule Consultation
                        </button>
                        <button className="bg-card border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-soft">
                            📊 View Treatment Plans
                        </button>
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
}