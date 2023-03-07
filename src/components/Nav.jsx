// Import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs'
// import Link
import { Link } from 'react-scroll'
export default function Nav() {
	return (
		<nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
			<div className='container mx-auto'>
				{/* nav inner */}
				<div className='w-full bg-black/20 h-[76px] backdrop-blur-2xl rounded-full max-w-[420px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
					<Link
						to='home'
						activeClass='active'
						smooth={true}
						spy={true}
						offset={-200}
						className='cursor-pointer w-[45px] h-[45px] flex items-center justify-center align-middle'
					>
						<BiHomeAlt />
					</Link>
					<Link
						to='about'
						activeClass='active'
						smooth={true}
						spy={true}
						className='cursor-pointer w-[45px] h-[45px] flex items-center justify-center align-middle'
					>
						<BiUser />
					</Link>
					<Link
						to='services'
						activeClass='active'
						smooth={true}
						spy={true}
						className='cursor-pointer w-[45px] h-[45px] flex items-center justify-center align-middle'
					>
						<BsClipboardData />
					</Link>
					<Link
						to='work'
						activeClass='active'
						smooth={true}
						spy={true}
						className='cursor-pointer w-[45px] h-[45px] flex items-center justify-center align-middle'
					>
						<BsBriefcase />
					</Link>
					<Link
						to='contact'
						activeClass='active'
						smooth={true}
						spy={true}
						className='cursor-pointer w-[45px] h-[45px] flex items-center justify-center align-middle'
					>
						<BsChatSquareText />
					</Link>
				</div>
			</div>
		</nav>
	)
}
