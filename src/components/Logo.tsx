interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <a href="#" className={`flex items-center gap-2 ${className}`}>
      {/* Plynn Logo - Purple Play Button P */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#7C3AED"/>
        <path 
          d="M12 10C12 9.44772 12.4477 9 13 9H15C15.5523 9 16 9.44772 16 10V22C16 22.5523 15.5523 23 15 23H13C12.4477 23 12 22.5523 12 22V10Z" 
          fill="white"
        />
        <path 
          d="M18 14.5L23 11V21L18 17.5V14.5Z" 
          fill="white"
        />
      </svg>
      
      {showText && (
        <span className="font-sans text-xl font-semibold text-plynn-text">
          Plynn
        </span>
      )}
    </a>
  );
}
