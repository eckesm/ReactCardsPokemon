import { useState } from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage'

const useAxios = (formatter, key, baseUrl) => {
	// const [ cardArray, setCardArray ] = useState([]);
	const [ cardArray, setCardArray ] = useLocalStorage(key,[]);

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
