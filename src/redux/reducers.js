import { combineReducers } from 'redux';
import { ADD_ITEM, UPDATE_NAME } from './actions';

const initialState = {
	name: 'Prem Asok',
};

const nameReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NAME:
			return {
				...state,
				name: action.payload,
			};
		default:
			return state;
	}
};

const listsInitialState = {
	lists: ['item4', 'item5', 'item6'],
};

const listsReducer = (state = listsInitialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				lists: [...state.lists, action.payload],
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	nameReducer,
	listsReducer,
});

export default rootReducer;
