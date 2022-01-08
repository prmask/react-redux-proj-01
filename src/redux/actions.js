export const UPDATE_NAME = 'UPDATE_NAME';
export const ADD_ITEM = 'ADD_ITEM';

export const updateName = (name) => {
	return {
		type: UPDATE_NAME,
		payload: name,
	};
};

export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		payload: item,
	};
};
