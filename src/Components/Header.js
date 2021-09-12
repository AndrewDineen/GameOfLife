import styled from '@emotion/styled';
import * as React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
const actionType = {
	UpdateSquare: "UPDATE_SQUARE",
	ClearArray: "CLEAR_ARRAY",
	ToggleGame: "TOGGLE_GAME",
	IncrementIterationCount: "INCREMENT_ITERATION_COUNT"
}

export default function Header(props) {

	const Container = styled.div`
		background-color: #2B2D42;
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
		div{
			font-size: 2rem;
			height: 32px;
			padding: 5px;
			&:hover{
				background-color: white;
				border-radius: 3px;
				transition: background-color 1s;
				svg{
					fill: black;
					stroke: black;
					transition: all 1s;
				}
			}
		}
	`;
	const [play, setPlay] = React.useState(true);
	const dispatch = useDispatch();
	const playPauseGame = () => {
		dispatch({ type: actionType.ToggleGame });
		dispatch({ type: actionType.IncrementIterationCount });
		setPlay(!play);
	}

	return (<Container>

		<div onClick={() => {
			playPauseGame();
		}} onKeyDown={(event) => {
				if (event.key === 'p') {
					playPauseGame();
				}
			}}
			style={{ display: play ? 'block' : 'none' }}><BsPlayFill /></div>
		<div onClick={() => {
			playPauseGame();
		}} onKeyDown={(event) => {
				if (event.key === 'p') {
					playPauseGame();
				}
			}}
			style={{ display: play ? 'none' : 'block' }}><BsPauseFill /></div>
		<div onClick={() => {
			dispatch({ type: actionType.ClearArray });
		}} onKeyDown={(event) => {
				if (event.key === 'x') {
					dispatch({ type: actionType.ClearArray });
				}
			}}
		><AiOutlineClose /></div>
	</Container>);
}