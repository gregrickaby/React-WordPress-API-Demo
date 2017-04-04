/**
 * Create a clock.
 * @author Greg Rickaby
 */
function clock() {

	// Get the HTML container.
	const reactContainer = document.getElementById( 'react' );

	// Create clock markup.
	const reactElement = (
		<div className="clock-container">
			<h1>Hello, world!</h1>
			<h2>The current time is <span className="clock-time">{ new Date().toLocaleTimeString() }</span></h2>
		</div>
	);

	// Pass in the element and container and render!
	ReactDOM.render( reactElement, reactContainer );
}

// Update the clock, every 1 second.
setInterval( clock, 1000 );