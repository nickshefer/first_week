import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
export default function SignIn() {
	return (
		<div className='modal_middle'>
			<h3 className='modal_title'>Sign In To eatly</h3>
			<div className='modal_buttons'>
				<button className='modal_btn'>
					<FaGoogle />
				</button>
				<button className='modal_btn'>
					<FaApple />
				</button>
			</div>
			<p className='modal_or'>OR</p>
			<form action='/' className='modal_form'>
				<input className='modal_input' type='email' placeholder='EMAIL' />
				<input className='modal_input' type='password' placeholder='PASSWORD' />
				<div className='modal_forgot-password'>
					<a href='#'>Forget Password ?</a>
				</div>
				<button className='modal_submit-btn' type='submit'>
					SIGN IN
				</button>
				<div className='modal_question'>
					Create A New Account? <a href='#'>Sign Up</a>
				</div>
			</form>
		</div>
	);
}
