import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useAxios = baseUrl => {
	const [ cardArray, setCardArray ] = useState([]);

	const addToArray = async (restOfUrl = '') => {
		const response = await axios.get(`${baseUrl}${restOfUrl}`);
		setCardArray(cardArray => [ ...cardArray, { ...response.data, id: uuid() } ]);
	};

	return [ cardArray, addToArray ];
};

export default useAxios;
