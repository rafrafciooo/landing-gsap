import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
	const videoRef = useRef();

	const isMobile = useMediaQuery({ maxWidth: 767 });

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

		const startValue = isMobile ? "top 50%" : "center 60%";
		const endValue = isMobile ? "120% top" : "bottom top";

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "video",
				start: startValue,
				end: endValue,
				scrub: true,
				pin: true,
			},
		});
		videoRef.current.onloadedmetadata = () => {
			tl.to(videoRef.current, {
				currentTime: videoRef.current.duration,
			});
		};
	}, []);
	return (
		<>
			<section id='hero' className='noisy'>
				<h1 className='title'>Żryj gruz</h1>
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
							<p>Konopie, Koka</p>
							<p className='subtitle'>Dupa Cyce Cocktails</p>
						</div>
						<div className='view-cocktails'>
							<p className='subtitle'>Sprawdź to gówno synu</p>
							<a href='#cocktails'>Znajdz pigułke</a>
						</div>
					</div>
				</div>
			</section>
			<div className='video absolute inset-0'>
				<video
					ref={videoRef}
					src='/videos/output.mp4'
					muted
					playsInline
					preload='auto'
				/>
			</div>
		</>
	);
};

export default Hero;
