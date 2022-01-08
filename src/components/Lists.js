import { useSelector } from 'react-redux';

const Lists = () => {
	const lists = useSelector((state) => state.listsReducer.lists);

	return (
		<div className="lists">
			<h2>Lists</h2>
			{lists.map((item, id) => {
				return (
					<div key={id} className="list__item">
						<p>{item}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Lists;
