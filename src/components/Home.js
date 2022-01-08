import { useSelector } from 'react-redux';
import Input from './Input';
import Lists from './Lists';

const Home = () => {
	const name = useSelector((state) => state.nameReducer.name);
	return (
		<div className="home">
			<div className="home__top">
				<h1>Home Component</h1>
				<p>Name: {name}</p>
			</div>
			<div className="home__children">
				<Lists />
				<Input />
			</div>
		</div>
	);
};

export default Home;
