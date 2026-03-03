import { motion } from "framer-motion";
import Container from "../components/Container";
import CaseStudyCard from "../components/CaseStudyCard";
import Button from "../components/Button";
import { caseStudies } from "../data/results";

export default function Results() {
    return (
        <section id="results" className="relative py-16 sm:py-20 lg:py-24 bg-backgroundSoft overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '3s'}} />
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
                        <span className="text-primary-600 font-medium">Treatment Results</span>
                    </motion.div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
                        Real{" "}
                        <span className="bg-dental-gradient bg-clip-text text-transparent">
                            Transformations
                        </span>
                        , Real People
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-body max-w-3xl mx-auto leading-relaxed">
                        See the life-changing results our patients have achieved. Every smile tells a unique story 
                        of transformation, confidence, and improved quality of life.
                    </p>
                </motion.div>

                {/* Results Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
                >
                    {[
                        { icon: "🏆", number: "500+", label: "Successful Cases" },
                        { icon: "⭐", number: "4.9/5", label: "Patient Rating" },
                        { icon: "🎯", number: "99%", label: "Success Rate" },
                        { icon: "👥", number: "2,000+", label: "Happy Patients" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="text-center p-4 sm:p-6 bg-card rounded-2xl sm:rounded-3xl shadow-soft border border-borderSoft hover:shadow-glow hover:border-primary-200 transition-all duration-300"
                        >
                            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{stat.icon}</div>
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-dental-gradient bg-clip-text text-transparent mb-1 sm:mb-2">
                                {stat.number}
                            </div>
                            <div className="text-xs sm:text-sm font-medium text-body">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Case Studies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-center text-heading mb-4">
                        Patient{" "}
                        <span className="bg-dental-gradient bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </h3>
                    <p className="text-base sm:text-lg text-body text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                        Explore real patient transformations with interactive before & after comparisons. 
                        Each case showcases our commitment to creating beautiful, life-changing smiles.
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 items-start"
                    style={{ gridAutoRows: 'max-content' }}
                >
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={study.title}
                            {...study}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-primary-100"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-3xl sm:text-4xl mb-4 sm:mb-6"
                    >
                        ✨
                    </motion.div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-heading mb-3 sm:mb-4">
                        Ready for Your Own Transformation?
                    </h3>
                    
                    <p className="text-base sm:text-lg text-body mb-6 sm:mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied patients who have transformed their smiles with Dr. Thorne. 
                        Schedule your consultation today and discover what's possible.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            variant="gradient" 
                            size="lg"
                            onClick={() => {
                                setTimeout(() => {
                                    const consultationSection = document.getElementById('consultation');
                                    if (consultationSection) {
                                        // Temporarily disable smooth scroll behavior
                                        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
                                        document.documentElement.style.scrollBehavior = 'auto';
                                        
                                        // Get exact position
                                        const rect = consultationSection.getBoundingClientRect();
                                        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
                                        const targetY = rect.top + currentScrollY - 80;
                                        
                                        // Multiple scroll attempts with different methods
                                        document.documentElement.scrollTop = targetY;
                                        
                                        setTimeout(() => {
                                            document.body.scrollTop = targetY;
                                            
                                            setTimeout(() => {
                                                window.scrollTo(0, targetY);
                                                
                                                // Restore original scroll behavior
                                                setTimeout(() => {
                                                    document.documentElement.style.scrollBehavior = originalScrollBehavior;
                                                }, 100);
                                            }, 50);
                                        }, 50);
                                    }
                                }, 100);
                            }}
                        >
                            📞 Schedule Consultation
                        </Button>
                        {/* <Button variant="secondary" size="lg">
                            📸 Submit Your Photos
                        </Button> */}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}