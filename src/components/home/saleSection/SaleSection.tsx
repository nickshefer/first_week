export default function SaleSection() {
	return (
		<section className='sale'>
			<div className='container'>
				<div className='sale_block'>
					<h2 className='sale_title'>Get 50%</h2>
					<form className='sale-form' action='/'>
						<input
							className='sale-input'
							type='email'
							placeholder='Enter Your Email Address'
						/>
						<button type='submit' className='sale_btn'>
							SUBSCRIBE
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
