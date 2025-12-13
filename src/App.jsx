import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {


	return (
		<div className=' flex-center h-screen'>
			<p className="text-7xl">Hello, GSAP</p>
		</div>
	);
};

export default App;
