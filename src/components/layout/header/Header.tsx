import { useState } from 'react';
import logo from '../../../assets/logo.svg';
import Button from '../../UI/button/Button';
import { headerLinks } from '../Links';

export default function Header() {
	const [menuVisible, setMenuVisible] = useState(false);
	return (
		<header className='header'>
			<div className='container'>
				<div className='header_body'>
					<a href='/' className='header_logo'>
						<img src={logo} alt='logo eatly' />
						<span>eatly</span>
					</a>
					<nav className={`header_menu ${menuVisible && 'active'}`}>
						<ul className='header_list'>
							{headerLinks.map(link => (
								<li key={link.title} className='header_link'>
									<a href={link.href}>{link.title}</a>
								</li>
							))}
							<li className='header_link header_link__btns'>
								<Button variant='outlineDark'>Login</Button>
								<Button>Sign up</Button>
							</li>
						</ul>
					</nav>
					<div className='header_buttons'>
						<Button variant='outlineDark'>Login</Button>
						<Button>Sign up</Button>
					</div>
					<button
						onClick={() => setMenuVisible(!menuVisible)}
						className={`header_burger ${menuVisible && 'active'}`}
					>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	);
}
