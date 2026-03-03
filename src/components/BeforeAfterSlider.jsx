import { motion } from "framer-motion";
import { useState } from "react";

export default function BeforeAfterSlider({ beforeImage, afterImage, title }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsDragging(false);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        handleMouseMove(e);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        handleTouchMove(e);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg group">
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 border-b border-borderSoft">
                <h3 className="font-bold text-heading text-center">{title}</h3>
            </div>

            {/* Before/After Container */}
            <div 
                className="relative h-80 cursor-ew-resize select-none touch-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* After Image (Full Width) */}
                <img 
                    src={afterImage}
                    alt="After treatment"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Before Image (Clipped) */}
                <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src={beforeImage}
                        alt="Before treatment"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize flex items-center justify-center group-hover:w-2 transition-all duration-200"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg border-2 border-primary-500 flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-heading shadow-soft">
                    Before
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-heading shadow-soft">
                    After
                </div>

                {/* Interaction Instruction */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered || isDragging ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-1 py-2 rounded-full text-sm text-body shadow-soft"
                >
                    ← Move cursor to compare →
                </motion.div>
            </div>
        </div>
    );
}