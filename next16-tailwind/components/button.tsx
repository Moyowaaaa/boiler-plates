interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: 'primary' | 'secondary';
}

export default function Button({
	children,
	onClick,
	variant = 'primary',
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`h-[max(3.5rem,56px)] rounded-[max(0.5rem,8px)] 
      text-15 font-medium transition-colors duration-500 ease-in-out
      uppercase px-gutter
      ${
				variant === 'primary'
					? 'bg-peach text-white hover:bg-light-peach'
					: 'bg-white text-dark-grey hover:bg-light-peach hover:text-white'
			}`}>
			{children}
		</button>
	);
}
