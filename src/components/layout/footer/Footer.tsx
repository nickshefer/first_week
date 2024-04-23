import logo from '../../../assets/logo.svg';
import { footerLinks } from '../Links';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer_top'>
					<a href='/' className='header_logo'>
						<img src={logo} alt='logo eatly' />
						<span>eatly</span>
					</a>
					<nav className='footer_menu'>
						<ul className='footer_list'>
							{footerLinks.map(link => (
								<li key={link.title} className='footer_link'>
									<a href={link.href}>{link.title}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className='footer_bottom'>
					<p className='footer_copyright'>© 2023 EATLY All Rights Reserved.</p>
					<ul className='footer_socials'>
						<li className='footer_socials-link'>
							<a href='#'>
								<FaInstagram size={22} className='footer_icon' />
							</a>
						</li>
						<li className='footer_socials-link'>
							<a href='#'>
								<FaLinkedinIn size={22} className='footer_icon' />
							</a>
						</li>
						<li className='footer_socials-link'>
							<a href='#'>
								<FaFacebookF size={22} className='footer_icon' />
							</a>
						</li>
						<li className='footer_socials-link'>
							<a href='#'>
								<FaTwitter size={22} className='footer_icon' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
