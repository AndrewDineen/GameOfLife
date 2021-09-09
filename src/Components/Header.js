import styled from '@emotion/styled';
import * as React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { BiEraser } from 'react-icons/bi';
import { BsPauseFill, BsPencil, BsPlayFill } from 'react-icons/bs';

export default function Header() {
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

	return (<Container>
		<div><BsPencil /></div>
		<div><BiEraser /></div>
		<div><BsPlayFill /></div>
		<div style={{ display: 'none' }}><BsPauseFill /></div>
		<div><AiOutlineClose /></div>
	</Container>);
}