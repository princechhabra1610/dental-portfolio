import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";

export default function About() {
    const achievements = [
        { icon: "🎓", title: "Master of Dental Surgery", subtitle: "Royal Dental College, 2012" },
        { icon: "🏆", title: "Board Certified", subtitle: "American Board of Cosmetic Dentistry" },
        { icon: "⭐", title: "Distinguished Fellow", subtitle: "International Academy of Dentistry" },
        { icon: "📚", title: "Published Researcher", subtitle: "25+ Peer-reviewed Articles" }
    ];

    const expertise = [
        "Advanced Cosmetic Dentistry",
        "Dental Implant Surgery", 
        "Invisalign Specialist",
        "Sedation Dentistry",
        "Smile Design & Makeovers",
        "Emergency Dental Care"
    ];

    return (
        <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-card overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{animationDelay: '2s'}} />
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
                        <span className="text-primary-600 font-medium">Meet Your Doctor</span>
                    </motion.div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
                        Dr.{" "}
                        <span className="bg-dental-gradient bg-clip-text text-transparent">
                            Aris Thorne
                        </span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed">
                        Leading Seattle Smile Studio with over 12 years of experience 
                        in advanced cosmetic and restorative dentistry.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
                    {/* Doctor Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 sm:space-y-8 order-2 lg:order-1"
                    >
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-base sm:text-lg text-body leading-relaxed">
                                Dr. Thorne is a distinguished dental surgeon passionate about creating beautiful, 
                                healthy smiles. His patient-centered approach combines cutting-edge technology 
                                with gentle care to deliver exceptional results.
                            </p>
                            
                            <p className="text-base sm:text-lg text-body leading-relaxed">
                                With advanced training in cosmetic dentistry and implant surgery, Dr. Thorne 
                                has helped thousands of patients achieve their dream smiles through personalized 
                                treatment plans and meticulous attention to detail.
                            </p>
                        </div>

                        {/* Expertise Areas */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-heading mb-3 sm:mb-4">Areas of Expertise</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                {expertise.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-body"
                                    >
                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-sm font-medium">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Doctor Image with Floating Elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative group">
                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-3xl">
                                <motion.img
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&crop=face"
                                    alt="Dr. Aris Thorne"
                                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Floating Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-card p-2 sm:p-4 rounded-2xl shadow-lg border border-borderSoft animate-float"
                            >
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl font-bold bg-dental-gradient bg-clip-text text-transparent">12+</div>
                                    <div className="text-xs font-semibold text-body uppercase tracking-wide">Years Experience</div>
                                </div>
                            </motion.div>

                            {/* Floating Patient Count */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-card p-2 sm:p-4 rounded-2xl shadow-lg border border-borderSoft animate-float"
                                style={{animationDelay: '1s'}}
                            >
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl font-bold bg-dental-gradient bg-clip-text text-transparent">5000+</div>
                                    <div className="text-xs font-semibold text-body uppercase tracking-wide">Happy Patients</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Achievements Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="text-center p-4 sm:p-6 bg-backgroundSoft rounded-2xl border border-borderSoft hover:shadow-glow hover:border-primary-200 transition-all duration-300"
                        >
                            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{achievement.icon}</div>
                            <h4 className="font-bold text-heading text-sm mb-1 sm:mb-2">{achievement.title}</h4>
                            <p className="text-xs text-body">{achievement.subtitle}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Philosophy Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary-100"
                >
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                    >
                        💬
                    </motion.div>
                    
                    <blockquote className="text-xl sm:text-2xl font-medium text-heading mb-3 sm:mb-4 italic">
                        "Every patient deserves a smile they're proud to share with the world."
                    </blockquote>
                    
                    <cite className="text-body font-semibold">— Dr. Aris Thorne</cite>
                </motion.div>
            </Container>
        </section>
    );
}