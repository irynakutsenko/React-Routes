import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";

function App() {
	return (
	<Router>

		<nav>
			<Link to="/">Home</Link>
			<Link to="/launch">Launch</Link>
		</nav>

		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="launch" element={<Launch/>}/>
			<Route path="/" element={<LaunchIndex/>}/>
			<Route path=":slug" element={<LaunchShoe/>}/>
			<Route path="*" element={<NotFound />} />
		</Routes>
	</Router>
	)
}

function NotFound() {
	return <div>
		<h1>Not Fond!</h1>
		<p>Sorry your page was not found!</p>
	</div>
}

function Home() {
	return <div>
		<h1>Welcome Home</h1>
	</div>
}

function Launch() {
	return (
	<div>
		<h1>Launch</h1>

		<Outlet/>
	</div>
	)
}
function LaunchIndex() {
	return <ul>
		{Object.entries(shoes).map(([slug, {name, img}]) => 
		<li key={slug}>
			<Link to={`/launch/${slug}`}>
			<h2>{name}</h2>
			<img src={img} alt={name} title/>
			</Link>
		</li>)}
	</ul>
}

function LaunchShoe() {
	const {slug} = useParams();
	const shoe = shoes[slug];
	if(!shoe) {
		return <h2>Not Found!</h2>
	}

	const {name, img} = shoe;
	
	return <div>
		<h2>{name}</h2>
		<img src={img} alt={name}/>
	</div>
}

export default App;
