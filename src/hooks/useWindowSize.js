import { useState, useEffect } from "react";

export const useWindowSize = () => {
	// Initialize state with undefined width/height so server and client renders match
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		// Handler func
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		// Add listener for the resize event
		window.addEventListener("resize", handleResize);
		// On resize, call the handler func and set the window size to current width/height
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
		// declare resize func and set current window when component mounts
	}, []); 
		return windowSize;
}
