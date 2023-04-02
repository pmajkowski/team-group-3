import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  primary?: boolean;
  secondary?: boolean;
  sidebar?: boolean;
  navigation?: boolean;
  userNavigation?: boolean;
}

function Button({
  children,
  type,
  onClick,
  primary,
  secondary,
  sidebar,
  navigation,
  userNavigation,
}: ButtonProps) {
  let classes = "btn ";
  if (primary) {
    classes += "primary";
  } else if (secondary) {
    classes += "secondary";
  }
  if (sidebar) {
    classes += "sidebar";
  }
  if (navigation) {
    classes += "navigation";
  }
  if (userNavigation) {
    classes += "userNavigation";
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
