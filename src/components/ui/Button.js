// src/components/ui/Button.js

import Link from 'next/link';

export default function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200';

    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
        secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
        outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
}