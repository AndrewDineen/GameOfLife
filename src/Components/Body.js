import * as React from "react"
import styled from '@emotion/styled';
import Square from './Square';

export default function Body(){
	const Container = styled.div`
		background-color: #8D99AE;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(20, 1fr);
		grid-template-rows: repeat(20, 1fr);
	`
	const squares = [];
	for(let row = 0; row < 20; row++){
		for(let col = 0; col < 20; col++){
			squares.push(<Square rowStart={row} colStart={col}></Square>);
		}
	}
	return (<Container>{squares}</Container>);
}