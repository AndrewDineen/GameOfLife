import styled from '@emotion/styled';
import * as React from "react";
import Body from '../Components/Body';
import Header from '../Components/Header';
import './index.css';

const Container = styled.main`
	color: white;
	font-family: -apple-system, Roboto, sans-serif, serif;
	height: 100%;
`

const IndexPage = () => {
	return (
		<Container>
			<Header></Header>
			<Body></Body>
		</Container>

	)
}

export default IndexPage
