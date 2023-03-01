import "./Button.css";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?:"button" | "submit" | "reset" | undefined
	primary?: boolean;
	secondary?: boolean;
}

function Button({ children,type, onClick,primary,secondary}: ButtonProps) {
	
	let classes = "btn ";
	if (primary) {
		classes += "primary";
	} else if (secondary) {
		classes += "secondary";
	} 
	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	);
}

export default Button;


