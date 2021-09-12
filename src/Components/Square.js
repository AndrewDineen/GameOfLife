import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
const actionType = {
	UpdateSquare: "UPDATE_SQUARE",
	ToggleMouse: "TOGGLE_MOUSE",
}

export default function Square({ rowStart, colStart }) {
	const [dragging, setDragging] = React.useState(false);
	const squareStatus = useSelector(state => state.squareStatus);
	const dispatch = useDispatch();
	const Container = styled.div`
		${squareStatus[rowStart][colStart] ? css`background-color: #EF233C;` : css`background-color: #8D99AE;`}
		grid-row: ${rowStart}/${rowStart + 1};
		grid-column: ${colStart}/${colStart + 1};
		border: 1px solid #EDF2F4;
		&:hover{
			background-color: #EF233C;
		}
		${dragging ? css`opacity: 0.1;` : css`opacity: 1;`}
	`
	const updateSquareState = () => {
		dispatch({ type: actionType.UpdateSquare, col: colStart, row: rowStart });
	};

	
	return (<Container
		draggable="true"
		onMouseDown={() => {
			dispatch({ type: actionType.ToggleMouse });
			updateSquareState();
			
		}}
		// onMouseUp={() => {
		// 	setDragging(false);
		// 	console.log('not dragging', dragging);
		// }}
		// onDragStart={()=>{
			
		// 	setDragging(dragging => {
		// 		dragging = true
		// 		console.log('dragging!!', dragging);
		// 		return dragging;
		// 	});
		// }}

		// onDragEnd={()=>{
			
		// 	setDragging(dragging => {
		// 		dragging = false
		// 		console.log('not dragging!!', dragging);
		// 		return dragging;
		// 	});
		// }}
		
		onDragOver={() => {
			if(!squareStatus[rowStart][colStart]){
				updateSquareState();
			}
		}}
	></Container>);
}