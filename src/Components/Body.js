import styled from '@emotion/styled';
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as generateKey } from 'uuid';
import Square from './Square';
const actionType = {
	UpdateSquare: "UPDATE_SQUARE",
	ClearArray: "CLEAR_ARRAY",
	ToggleMouse: "TOGGLE_MOUSE",
	ToggleGame: "TOGGLE_GAME",
	IncrementIterationCount: "INCREMENT_ITERATION_COUNT"
}

export default function Body() {
	const Container = styled.div`
		background-color: #8D99AE;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(20, 1fr);
		grid-template-rows: repeat(20, 1fr);
	`
	const gameActive = useSelector(state => state.gameActive);
	const iterationCount = useSelector(state => state.iterationCount);
	const dispatch = useDispatch();
	const squareStatus = useSelector(state => state.squareStatus);

	React.useEffect(() => {
		
		const startGame = () => {
			const oldSquareStatus = [...squareStatus];
			setTimeout(() => {
				for (let row = 0; row < squareStatus.length; row++) {
					for (let col = 0; col < squareStatus[0].length; col++) {
						const currentSquare = oldSquareStatus[row][col];

						let numNeighbors = 0;
						if (row > 0) if (oldSquareStatus[row - 1][col]) numNeighbors++;
						if (col > 0) if (oldSquareStatus[row][col - 1]) numNeighbors++;
						if (row < oldSquareStatus.length - 1) if (oldSquareStatus[row + 1][col]) numNeighbors++;
						if (col < oldSquareStatus[0].length - 1) if (oldSquareStatus[row][col + 1]) numNeighbors++;

						if (col > 0 && row > 0) if (oldSquareStatus[row - 1][col - 1]) numNeighbors++;
						if (row > 0 && col < oldSquareStatus[0].length - 1) if (oldSquareStatus[row - 1][col + 1]) numNeighbors++;
						if (col > 0 && row < oldSquareStatus.length - 1) if (oldSquareStatus[row + 1][col - 1]) numNeighbors++;
						if (col < oldSquareStatus[0].length - 1 && row < oldSquareStatus.length - 1) if (oldSquareStatus[row + 1][col + 1]) numNeighbors++;
						if (currentSquare === true) {
							if (numNeighbors < 2 || numNeighbors > 3) {
								dispatch({ type: actionType.UpdateSquare, row: row, col: col });
							}
						} else {
							if (numNeighbors === 3) dispatch({ type: actionType.UpdateSquare, row: row, col: col });
						}
					}
				}
				dispatch({ type: actionType.IncrementIterationCount });
			}, 300)

		};
		if (gameActive) {
			startGame();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [iterationCount, gameActive]);
	const squares = [];
	for (let row = 0; row < 20; row++) {
		for (let col = 0; col < 20; col++) {
			squares.push(<Square rowStart={row} colStart={col} key={generateKey()}></Square>);
		}
	}
	return (<Container>{squares}</Container>);
}