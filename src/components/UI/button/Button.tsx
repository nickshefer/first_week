interface ButtonProps {
	as?: 'a';
	href?: string;
	variant?: Variant;
	children: React.ReactNode;
}

type Variant = 'default' | 'outlineDark' | 'outlinePrimary';

export default function Button(props: ButtonProps) {
	if (props.as === 'a') {
		return (
			<a
				{...props}
				href={props.href}
				className={`btn ${
					props.variant ? `btn__${props.variant}` : 'btn__default'
				}`}
			>
				{props.children}
			</a>
		);
	}

	return (
		<button
			{...props}
			className={`btn ${
				props.variant ? `btn__${props.variant}` : 'btn__default'
			}`}
		>
			{props.children}
		</button>
	);
}
