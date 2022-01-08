import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, updateName } from '../redux/actions';

const Input = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({ name: '', item: '' });

	const handleChange = (e) => {
		const tempData = {
			...formData,
			[e.target.name]: e.target.value,
		};
		setFormData(tempData);
	};

	const handleNameUpdate = () => {
		dispatch(updateName(formData.name));
	};

	const handleAddItem = () => {
		dispatch(addItem(formData.item));
	};

	return (
		<div className="input">
			<h2>Input</h2>
			<div className="input__field">
				<input onChange={handleChange} name="name" placeholder="Name" />
				<button onClick={handleNameUpdate}>Add</button>
			</div>

			<div className="input__field">
				<input onChange={handleChange} name="item" placeholder="Item" />
				<button onClick={handleAddItem}>Add</button>
			</div>
		</div>
	);
};

export default Input;
