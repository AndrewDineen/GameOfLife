import styled from '@emotion/styled';
import * as React from "react";
import Body from '../Components/Body';
import Header from '../Components/Header';
import './index.css';
import { Provider } from 'react-redux';
import Store from '../Helpers/Store/index';
import Tutorial from '../Components/Tutorial';

const Container = styled.main`
	color: white;
	font-family: -apple-system, Roboto, sans-serif, serif;
	height: 100%;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	overflow: hidden;
`


const IndexPage = () => {
	const [showModal, setShowModal] = React.useState(true);
	const toggleModal = () => {
		setShowModal(showModal => !showModal);
	}
	return (
		<Provider store={Store}>
			<Tutorial showModal={showModal} setShowModal={toggleModal}/>
			<Container>
				<Header></Header>
				<Body></Body>
			</Container>
		</Provider>

	)
}

export default IndexPage
