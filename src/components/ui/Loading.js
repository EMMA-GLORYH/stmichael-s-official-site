// src/components/ui/Loading.js
'use client';

import { Loader2 } from 'lucide-react';

/**
 * Professional Loading Component
 * 
 * Usage Examples:
 * 
 * 1. Basic spinner:
 *    <Loading />
 * 
 * 2. With custom text:
 *    <Loading text="Processing your application..." />
 * 
 * 3. Different sizes:
 *    <Loading size="sm" />
 *    <Loading size="md" />
 *    <Loading size="lg" />
 *    <Loading size="xl" />
 * 
 * 4. Fullscreen overlay:
 *    <Loading fullscreen text="Submitting..." />
 * 
 * 5. Different variants:
 *    <Loading variant="primary" />
 *    <Loading variant="secondary" />
 *    <Loading variant="success" />
 *    <Loading variant="danger" />
 */

export default function Loading({ 
  text = 'Loading...', 
  size = 'md',
  variant = 'primary',
  fullscreen = false,
  showText = true,
  className = ''
}) {
  // Size mappings
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  // Variant colors
  const variantClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    danger: 'text-red-600',
    warning: 'text-yellow-600',
    white: 'text-white'
  };

  // Base content
  const content = (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} ${variantClasses[variant]} animate-spin`} />
      {showText && (
        <p className={`${textSizeClasses[size]} ${variantClasses[variant]} font-medium`}>
          {text}
        </p>
      )}
    </div>
  );

  // Return fullscreen version if requested
  if (fullscreen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {content}
        </div>
      </div>
    );
  }

  // Return inline version
  return content;
}

/**
 * Specialized Loading Components for specific use cases
 */

// Button Loading State
export function ButtonLoading({ text = 'Processing...', size = 'sm' }) {
  return (
    <div className="flex items-center gap-2">
      <Loader2 className={`${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} animate-spin`} />
      <span>{text}</span>
    </div>
  );
}

// Card Loading Skeleton
export function CardLoading({ lines = 3 }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm space-y-3 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 bg-gray-200 rounded w-full"></div>
      ))}
    </div>
  );
}

// Page Loading with Progress
export function PageLoading({ progress = null, text = 'Loading...' }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
          <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{text}</h2>
        {progress !== null && (
          <div className="w-64 mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">{progress}% Complete</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Inline Text Loading
export function InlineLoading({ text = 'Loading' }) {
  return (
    <span className="inline-flex items-center gap-2 text-gray-600">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>{text}</span>
    </span>
  );
}

// Table Loading Skeleton
export function TableLoading({ rows = 5, columns = 4 }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="px-6 py-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Dots Loading Animation
export function DotsLoading({ variant = 'primary' }) {
  const variantClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    success: 'bg-green-600',
    danger: 'bg-red-600'
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
      <div className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
      <div className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
    </div>
  );
}

// Spinner with Percentage
export function SpinnerWithProgress({ progress = 0, text = 'Processing' }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg className="w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 36}`}
            strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
            className="text-blue-600 transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-blue-600">{Math.round(progress)}%</span>
        </div>
      </div>
      <p className="text-sm font-medium text-gray-600">{text}</p>
    </div>
  );
}

// Form Submission Loading
export function FormSubmissionLoading({ stage = 1, totalStages = 3 }) {
  const stages = [
    { number: 1, text: 'Validating information' },
    { number: 2, text: 'Processing application' },
    { number: 3, text: 'Sending confirmation' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Submitting Application
          </h3>
          <p className="text-sm text-gray-600">Please wait while we process your information</p>
        </div>

        <div className="space-y-3">
          {stages.slice(0, totalStages).map((item) => (
            <div key={item.number} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                item.number < stage 
                  ? 'bg-green-500' 
                  : item.number === stage 
                  ? 'bg-blue-600' 
                  : 'bg-gray-200'
              }`}>
                {item.number < stage ? (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className={`text-sm font-bold ${
                    item.number === stage ? 'text-white' : 'text-gray-500'
                  }`}>
                    {item.number}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  item.number <= stage ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(stage / totalStages) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}