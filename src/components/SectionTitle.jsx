import { motion } from "framer-motion";

export default function SectionTitle({ label, title, center = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${center ? "text-center" : ""}`}
        >
            {label && (
                <p className="text-primary uppercase tracking-widest text-sm mb-3">
                    {label}
                </p>
            )}
            <h2 className="text-4xl font-bold">{title}</h2>
        </motion.div>
    );
}