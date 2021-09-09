import * as React from "react"
import styled from '@emotion/styled';

export default function Square({rowStart, colStart}){
	const Container = styled.div`
		background-color: #8D99AE;
		grid-row: ${rowStart}/${rowStart + 1};
		grid-column: ${colStart}/${colStart + 1};
		border: 1px solid black;
		&:hover{
			background-color: white;
		}
	`
	return(<Container></Container>);
}