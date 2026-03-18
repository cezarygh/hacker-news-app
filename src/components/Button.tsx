type ButtonProps = {
  label: string;
  clickable?: boolean;
  disabled?: boolean;
  shadow?: "boring" | "exciting" | "none";
  progress?: number;
};

const Button = ({
  label,
  clickable = false,
  disabled = false,
  shadow = "none",
  progress = 0,
}: ButtonProps) => {
  return (
    <>
      <style>{`
        @keyframes depth-shift {
          0%, 100% { box-shadow: 2px 2px 0 2px #7F77DD; }
          25%       { box-shadow: 8px 8px 0 2px #7F77DD; }
          50%       { box-shadow: 4px -4px 0 2px #7F77DD; }
          75%       { box-shadow: -8px 4px 0 2px #7F77DD; }
        }
        .depth-shift {
          animation: depth-shift 1.5s ease-in-out infinite;
        }
      `}</style>
      <button
        disabled={disabled}
        className={`relative overflow-hidden px-4 py-2 rounded-4xl text-sm md:text-base
          ${clickable ? "transition-transform active:translate-y-1" : ""}
          ${disabled ? "bg-purple-400 text-purple-700 cursor-not-allowed" : "bg-purple-700 text-white cursor-pointer"} 
          ${shadow === "exciting" ? "depth-shift" : shadow === "boring" ? "shadow-xl" : ""}`}
      >
        {/* Progress bar */}
        {progress != null && (
          <div
            className="absolute left-0 top-0 h-full bg-purple-400 transition-all duration-300"
            style={{ width: `${progress}%`, zIndex: 0 }}
          />
        )}
        {/* Text */}
        <span className="relative z-10">{label}</span>
      </button>
    </>
  );
};

export default Button;
