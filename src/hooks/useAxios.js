import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useAxios = (formatter, baseUrl) => {
	const [ cardArray, setCardArray ] = useState([]);

	const addToArray = async (restOfUrl = '') => {
		const response = await axios.get(`${baseUrl}${restOfUrl}`);
		setCardArray(cardArray => [ ...cardArray, formatter(response.data) ]);
	};

	const removeCards = () => {
		setCardArray([]);
	};

	return [ cardArray, addToArray, removeCards ];
};

export default useAxios;
