import { LuLoader } from 'react-icons/lu';

interface LoaderProps {
	color?: string;
	size: number | string;
}

export default function Loader(props: LoaderProps) {
	return <LuLoader color={props.color} size={props.size} className='loader' />;
}
