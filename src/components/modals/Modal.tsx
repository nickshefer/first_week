import { useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { IoClose } from 'react-icons/io5';
import logo from '../../assets/logo.svg';
import ModalDecor from './ModalDecor';

export default function Modal(props: {
	visible: boolean;
	setVisible: (value: boolean) => void;
	children: React.ReactNode | React.ReactElement;
}) {
	const hideModal = () => {
		document.body.classList.remove('hidden');
		props.setVisible(false);
	};

	const modalRef = useRef(null);
	useClickOutside(modalRef, hideModal);
	return (
		<div className={`modal ${props.visible ? 'active' : ''}`}>
			<div className='container'>
				<div ref={modalRef} className='modal_content'>
					<div className='modal_main'>
						<div className='modal_header'>
							<img src={logo} alt='logo' />
						</div>
						{props.children}
						<div className='modal_footer'>
							<div className='modal_privacy'>
								<a href='#'>Privacy Policy</a>
							</div>
							<div className='modal_copyright'>Copyright 2022</div>
						</div>
					</div>
					<ModalDecor />
					<button className='modal_close' onClick={hideModal}>
						<IoClose size={30} />
					</button>
				</div>
			</div>
		</div>
	);
}
