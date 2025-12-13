// src/components/ui/Card.js

export default function Card({ children, className = '', hover = false }) {
    const hoverEffect = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';

    return (
        <div className={`bg-white rounded-xl shadow-md p-6 ${hoverEffect} ${className}`}>
            {children}
        </div>
    );
}