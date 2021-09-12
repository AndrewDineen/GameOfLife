import styled from '@emotion/styled';
import * as React from "react";
import Body from '../Components/Body';
import Header from '../Components/Header';
import './index.css';
import { Provider } from 'react-redux';
import Store from '../Helpers/Store/index';

const Container = styled.main`
	color: white;
	font-family: -apple-system, Roboto, sans-serif, serif;
	height: 100%;
	overflow: hidden;
`


const IndexPage = () => {
	
	return (
		<Provider store={Store}>
			<Container>
				<Header></Header>
				<Body></Body>
			</Container>
		</Provider>

	)
}

export default IndexPage
