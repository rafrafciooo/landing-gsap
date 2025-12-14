import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";

const Hero = () => {
	useGSAP(() => {
		const heroSplit = new SplitText(" .title", { type: "chars, words" });
		const paragraphSplit = new SplitText(".subtitle", {
			type: "lines",
		});

		heroSplit.chars.forEach(char => char.classList.add("text-gradient"));

		gsap.from(heroSplit.chars, {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			ease: "expo.out",
			stagger: 0.11,
		});

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.7,
			ease: "expo.out",
			stagger: 0.12,
			delay: 1,
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(".right-leaf", { yPercent: 100 }, 0)
			.to(".left-leaf", { yPercent: -100 }, 0);
	}, []);
	return (
		<>
			<section id='hero' className='noisy'>
				<h1 className='title'>Mohito</h1>
				<img
					src='/images/hero-left-leaf.png'
					alt='leaf'
					className='left-leaf'
				/>
				<img
					src='/images/hero-right-leaf.png'
					alt='leaf'
					className='right-leaf'
				/>
				<div className='body'>
					<div className='content'>
						<div className='space-y-5 hidden md:block'>
							<p>A new way to enjoy cocktails</p>
							<p className='subtitle'>Sip with us</p>
						</div>
						<div className='view-cocktails'>
							<p className='subtitle'>
								Every drink is unique, discover it, and sip with us.{" "}
							</p>
							<a href='#cocktails'>View Cocktails</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
