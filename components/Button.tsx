import { forwardRef } from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends React.BaseHTMLAttributes<HTMLButtonElement> {disabled?: boolean;
    type?: "button" | "submit" | "reset";}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button className={twMerge(`
    w-full
    rounded-full
    bg-green-500
    border
    border-transparent
    px-3
    py-3
    disabled:cursor-not-allowed
    disabled:opacity-50
    text-black
    font-bold
    hover:opacity-75
    transitions
    `,
    className
    )}
    disabled={disabled}
    ref={ref}
    {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button";

export default Button;
