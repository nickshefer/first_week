export default function Badge(props: { variant: string }) {
	return <div className={`badge badge__${props.variant}`}>{props.variant}</div>;
}
