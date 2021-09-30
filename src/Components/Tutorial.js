import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import * as React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
export default function Tutorial() {
	const [inModalAnimation, setInModalAnimation] = React.useState(false);
	const [inBackDropAnimation, setInBackDropAnimation] = React.useState(false);
	const [showModal, setShowModal] = React.useState(true);
	const [showBackDrop, setShowBackDrop] = React.useState(true);

	const handleModalExit = () => {
		setInModalAnimation(inModalAnimation => !inModalAnimation);
		setShowModal(showModal => !showModal);
		setInBackDropAnimation(inBackDropAnimation => !inBackDropAnimation);
	}
	const handleBackDropExit = () => {
		setInBackDropAnimation(inBackDropAnimation => !inBackDropAnimation);
		setShowBackDrop(showBackDrop => !showBackDrop);
	};
	const backdropAnimation = keyframes`
		0%{
			opacity: 1;
		}

		100%{
			opacity: 0;
		}
	`;
	const BackDrop = styled.div`
		height: 100vh;
		width: 100vw;
		background-color: #2B2D42;
		display: flex;
		align-items: center;
		 ${inBackDropAnimation ? css`animation: ${backdropAnimation} 1s 1s forwards;` : css``}
		
	
	`;

	const containerAnimation = keyframes`
		0%{
			opacity: 1;
			transform: translateY(0);
		}
		25%{
			transform: translateY(-10px);
		}
		100%{
			transform: translateY(30px);
			opacity: 0;
		}
	`;
	const Container = styled.div`
		background-color: #EDF2F4;
		height: 70%;
		width: 50%;
		border-radius: 5px;
		color: #2B2D42;
		display: flex;
		position: absolute;
		left: 25%;
		top: 15%;
		align-items: center;
		flex-direction: column;
		${inModalAnimation ? css`animation: ${containerAnimation} 1s forwards;` : css``}
	
	`;
	const CloseButton = styled.div`
		position: absolute;
		font-size: 1.8rem;
		right: 2%;
		top: 3%;
		
	`;

	const Title = styled.h1`
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		font-size: 2.2rem;
	`;

	const Paragraph = styled.p`
		font-family: 'Roboto', sans-serif;
		font-size: 1.2rem;
		align-self: flex-start;
		margin-left: 1rem;
	`;

	const Button = styled.div`
		width: 15%;
		height: 7%;
		background-color: #2B2D42;
		color: white;
		font-family: 'Roboto', sans-serif;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		&::before{
			content: '',
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			z-index: -1;
			background-color: blue;

		}
	`;
	const Row = styled.div`
		display: flex;
		justify-content: space-around;
		width: 100%;
		position: absolute;
		top: 80%;

	`;


	return (
		<div style={{ position: 'absolute', left: '0', right: '0', zIndex: '10', display: showBackDrop ? 'block' : 'none' }}>
			{showModal ? (<Container onAnimationEnd={handleModalExit}>
				<CloseButton onClick={() => { setInModalAnimation(inModalAnimation => !inModalAnimation) }}><AiOutlineClose></AiOutlineClose></CloseButton>
				<Title>Game of Life Visualizer</Title>
				<Paragraph>This application is a tribute to the late Jon Conway and his Game of Life.</Paragraph>
				<Paragraph>For more information on the Game of Life check out the Wikipedia page for it <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">here</a>.</Paragraph>
				<Paragraph>Here is a quick tutorial for your convenience:</Paragraph>
				<Paragraph>(1) You can click to select individual grid squares or you can click and drag to select multiple squares at once.</Paragraph>
				<Paragraph>(2) The X button will clear the board and the play/pause button will start and pause the simulation.</Paragraph>
				<Row>
					<Button onClick={() => { setInModalAnimation(inModalAnimation => !inModalAnimation) }}>Lets Go!</Button>
				</Row>
			</Container>) : ''}
			{showBackDrop ? (<BackDrop onAnimationEnd={handleBackDropExit}>
			</BackDrop>) : ''}

		</div>
	);
}