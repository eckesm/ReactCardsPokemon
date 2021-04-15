// import React, { useState } from 'react';
// import uuid from 'uuid';
// import axios from 'axios';
import useAxios from './hooks/useAxios';
import PlayingCard from './PlayingCard';
import { formatPlayingCards } from './helpers';
import './PlayingCardList.css';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const [ cards, addCard, clearCards ] = useAxios(
		formatPlayingCards,
		'https://deckofcardsapi.com/api/deck/new/draw/'
	);

	return (
		<div className="PlayingCardList">
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={() => addCard()}>Add a playing card!</button>
				<button onClick={clearCards}>Clear playing cards</button>
			</div>
			<div className="PlayingCardList-card-area">
				{cards.map(cardData => <PlayingCard key={cardData.id} front={cardData.front} />)}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
