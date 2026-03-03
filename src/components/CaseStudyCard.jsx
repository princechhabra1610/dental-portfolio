import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function CaseStudyCard({ 
    title, 
    description, 
    beforeImage, 
    afterImage, 
    treatment, 
    duration, 
    patientAge,
    results = [],
    index = 0
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || !containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = () => {
        setIsDragging(true);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        const handleGlobalTouchEnd = () => setIsDragging(false);
        
        document.addEventListener('mouseup', handleGlobalMouseUp);
        document.addEventListener('touchend', handleGlobalTouchEnd);
        
        return () => {
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('touchend', handleGlobalTouchEnd);
        };
    }, []);

    const handleToggle = () => {
        console.log('Button clicked, current state:', isExpanded); // Debug log
        setIsExpanded(prev => !prev);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 border border-borderSoft group self-start"
        >
            {/* Interactive Before/After Slider */}
            <div 
                ref={containerRef}
                className="relative h-40 sm:h-48 lg:h-56 overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300 cursor-col-resize select-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                {/* After Image (Base Layer) */}
                <div className="absolute inset-0">
                    <img 
                        src={afterImage} 
                        alt="After treatment"
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-secondary-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                        After
                    </div>
                </div>

                {/* Before Image (Overlay with Clip) */}
                <div 
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src={beforeImage} 
                        alt="Before treatment"
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                        Before
                    </div>
                </div>

                {/* Slider Line */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    {/* Slider Handle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-primary-500 rounded-full shadow-lg flex items-center justify-center">
                        <div className="flex gap-0.5">
                            <div className="w-0.5 h-4 bg-primary-500 rounded"></div>
                            <div className="w-0.5 h-4 bg-primary-500 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Treatment Badge */}
                <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-primary-600 shadow-soft">
                    {treatment}
                </div>

                {/* Drag Instruction (appears on hover, hides when dragging) */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-md text-xs font-medium transition-opacity duration-300 pointer-events-none ${
                    isDragging ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}>
                    Drag to compare
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-heading mb-2 group-hover:text-primary-600 transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm sm:text-base text-body leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Treatment Info */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="bg-backgroundSoft p-2 sm:p-3 rounded-xl">
                        <div className="text-xs text-body font-medium uppercase tracking-wide mb-1">Duration</div>
                        <div className="text-sm sm:text-base font-semibold text-heading">{duration}</div>
                    </div>
                    <div className="bg-backgroundSoft p-2 sm:p-3 rounded-xl">
                        <div className="text-xs text-body font-medium uppercase tracking-wide mb-1">Patient Age</div>
                        <div className="text-sm sm:text-base font-semibold text-heading">{patientAge}</div>
                    </div>
                </div>

                {/* Expandable Results - Simple Version */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="border-t border-borderSoft pt-4 pb-2">
                        <h4 className="font-semibold text-heading mb-3">Treatment Results:</h4>
                        <div className="space-y-2">
                            {results.map((result, resultIndex) => (
                                <div
                                    key={resultIndex}
                                    className="flex items-center gap-2 text-sm"
                                >
                                    <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full flex-shrink-0"></div>
                                    <span className="text-body">{result}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Expand Button */}
                <div className="relative z-10">
                    <button
                        onClick={handleToggle}
                        onMouseDown={(e) => e.preventDefault()}
                        type="button"
                        className="w-full mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-3 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-xl text-sm sm:text-base font-medium text-primary-600 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-300 relative z-20"
                        style={{ touchAction: 'manipulation' }}
                    >
                        <span className="pointer-events-none select-none">{isExpanded ? 'Show Less' : 'View Details'}</span>
                        <span 
                            className={`text-lg transition-transform duration-300 pointer-events-none select-none ${
                                isExpanded ? 'rotate-180' : 'rotate-0'
                            }`}
                        >
                            ↓
                        </span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}