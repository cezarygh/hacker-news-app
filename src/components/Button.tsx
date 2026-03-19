type ButtonVariant = "primary" | "secondary" | "disabled";
type ShadowVariant = "boring" | "exciting" | "none";

type ButtonProps = {
  variant?: ButtonVariant;
  label: string;
  clickable?: boolean;
  shadow?: ShadowVariant;
  progress?: number;
};

const Button = ({
  variant = "primary",
  label,
  clickable = false,
  shadow = "none",
  progress = 0,
}: ButtonProps) => {
  const buttonStyles = {
    primary: "bg-purple-700 text-white cursor-pointer",
    secondary: "bg-purple-400 text-white cursor-pointer",
    disabled:
      "bg-purple-400 font-semibold text-purple-700 opacity-60 cursor-not-allowed",
  };

  const buttonStyle = buttonStyles[variant];

  const shadowStyle =
    shadow === "exciting"
      ? "depth-shift"
      : shadow === "boring"
        ? "shadow-xl shadow-black/25"
        : "";

  const clickEffect = clickable
    ? "transition-transform active:translate-y-1"
    : "";

  return (
    <>
      <style>{`
        @keyframes depth-shift {
          0%, 100% { box-shadow: 2px 2px 0 2px #7F77DD; }
          25% { box-shadow: 8px 8px 0 2px #7F77DD; }
          50% { box-shadow: 4px -4px 0 2px #7F77DD; }
          75% { box-shadow: -8px 4px 0 2px #7F77DD; }
        }

        .depth-shift {
          animation: depth-shift 1.5s ease-in-out infinite;
        }
      `}</style>

      <button
        className={`
          relative overflow-hidden
          px-4 py-2
          rounded-4xl
          text-sm md:text-base
          ${buttonStyle}
          ${shadowStyle}
          ${clickEffect}
        `}
      >
        {progress > 0 && (
          <div
            className="absolute left-0 top-0 h-full transition-all duration-300 bg-purple-700"
            style={{ width: `${progress}%` }}
          />
        )}

        <span className="relative z-10">{label}</span>
      </button>
    </>
  );
};

export default Button;
