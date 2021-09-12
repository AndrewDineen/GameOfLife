import { createStore } from 'redux';
const actionType = {
	UpdateSquare: "UPDATE_SQUARE",
	ClearArray: "CLEAR_ARRAY",
	ToggleGame: "TOGGLE_GAME",
	IncrementIterationCount: "INCREMENT_ITERATION_COUNT"
}

const squareStateReducer = (state = {squareStatus: Array(20).fill().map(() => Array(20).fill(false)), gameActive: false, iterationCount: 0}, action) => {
	if(action.type === actionType.UpdateSquare){
		const newArray = [...state.squareStatus];
		newArray[action.row][action.col] = !newArray[action.row][action.col];
		return {...state, squareStatus: newArray};
	}else if(action.type === actionType.ClearArray){
		return {...state, squareStatus: Array(20).fill().map(() => Array(20).fill(false))};
	}else if(action.type === actionType.ToggleGame){
		return {...state, gameActive: !state.gameActive};
	}else if(action.type === actionType.IncrementIterationCount){
		return {...state, iterationCount: state.iterationCount + 1};
	}
	return state;
};
const Store = createStore(squareStateReducer);

export default Store;