import { FETCH_TODOS } from './types';

export const fetchTodos = () => {
	return {
		type: FETCH_TODOS,
	};
};

export default {
	FETCH_TODOS() {
		return fetch(
			'https://jsonplaceholder.typicode.com/todos?_limit=10'
		).then((response) => response.json());
	},
};
