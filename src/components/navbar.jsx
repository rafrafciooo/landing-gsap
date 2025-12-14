import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";

const Navbar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: "nav",
				start: "bottom top",
			},
		});
		navTween.fromTo(
			"nav",
			{ backgroundColor: "transparent" },
			{
				backgroundColor: "#00000050",
				backgroundFilter: "blur(10px)",
				duration: 0.5,
				ease: "power2.out",
			}
		);
	}, []);
	return (
		<nav className='bg-black'>
			<div>
				<a href='/' className='flex items-center gap-2'>
					<img
						src='/images/logo.png'
						alt='logo'
						className='w-10 h-10 object-contain'
					/>
					<p className='font-modern-negra text-3xl -mb-2'>Cool Cocktails</p>
				</a>
				<ul>
					{navLinks.map(link => (
						<li key={link.id} className='text-white'>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
