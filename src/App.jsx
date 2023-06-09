import Followers from "./components/Followers/Followers";
import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import { FOLLOWERS } from "./constants/followers";
import { OVERVIEW } from "./constants/overview";
import { GlobalStyles } from "./styles/globalStyles";
import { useState } from "react";


const App = () => {

	const [active, setActive] = useState(true);

	return (
		<>
		<GlobalStyles active={active}/>
			<div className="container">
				<Header 
				active={active}
				setActive={setActive}
				/>
			</div>
			<div className="section">
				{
					FOLLOWERS.map(followers=>(
						<Followers
						key={followers.id}
						color={followers.color}
						src={followers.src}
						alt={followers.alt}
						hastag={followers.hastag}
						number={followers.number}
						text={followers.text}
						today={followers.today}
						img={followers.img}
						letter={followers.letter}
						active={active}
						setActive={setActive}
						/>
					))
				}
			</div>
			<div className="section">
				<h2 className="texto">Overview - Today</h2>
			</div>

			<div className="overview">
				{
	
				OVERVIEW.map(overview=>(

					<Overview
						key={overview.id}
						src={overview.src}
						arrow={overview.arrow}
						alt={overview.alt}
						texto={overview.texto}
						number={overview.number}
						percentage={overview.percentage}
						color={overview.color}
						active={active}
						setActive={setActive}
					/>
				))
				}
				
			</div>
				
		</>
	)
};

export default App;