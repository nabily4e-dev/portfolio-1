import Logo from '../assets/text817.svg'

export default function Header() {
	return (
		<div className='py-8'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<a href='#'>
						<img
							src={Logo}
							alt='My logo!'
						/>
					</a>
					{/* button */}
					<button className='btn btn-sm'>Work with me</button>
				</div>
			</div>
		</div>
	)
}
