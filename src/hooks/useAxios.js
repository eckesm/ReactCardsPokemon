import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useAxios = url => {
	const [ cardArray, setCardArray ] = useState([]);

	const addToArray = async () => {
		const response = await axios.get(url);

		setCardArray(cardArray => [ ...cardArray, { ...response.data, id: uuid() } ]);
	};

	return [ cardArray, addToArray ];
};

export default useAxios;
