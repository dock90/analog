import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

// styles
const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 60px 1fr 50px;
	height: 100vh;
	padding-left: 0.5rem;
	padding-right: 0.5rem;

	@media (max-width: 768px) {
		grid-template-rows: 60px 1fr 80px;
	}
`;

const Header = styled.div`
	margin-top: 0.5rem;
	margin-left: 0.5rem;
`;

const Title = styled.h1`
	margin: 0;
	color: ${(props) => props.theme.colors.primary};
`;

const CardContainer = styled.div`
	justify-self: center;
	align-self: center;
`;

const Card = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	background: ${(props) => props.theme.colors.white};
	box-shadow: 5px 5px 8px 2px #ccc;
	border-radius: 5px;
	width: 18rem;
	height: 30rem;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
`;

const CardHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	align-items: center;
	margin-left: 0.5rem;
	margin-right: 0.5rem;

	p {
		margin: 0;
	}
`;

const CardType = styled.div``;

const Overview = styled.div`
	display: grid;
	grid-template-columns: 6fr 1fr;
	grid-template-rows: 1fr;
	justify-items: end;
`;
const Today = styled.div``;

const Signals = styled.div``;
const Signal = styled.div`
	height: 5px;
	width: 5px;
	border: 0.5px solid black;
	border-radius: 50%;
	margin-bottom: 2px;
	background: ${(props) => (props.complete ? 'black' : 'none')};
`;

const Task = styled.div`
	display: grid;
	grid-template-columns: 25px 1fr;
	grid-template-rows: 1fr;
	align-items: center;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	p {
		margin: 0;
	}
`;

const TaskCircle = styled.div`
	height: 12px;
	width: 12px;
	border-radius: 50%;
	border: 0.5px solid black;
	background: linear-gradient(
		to right,
		${(props) => (props.inProgress ? 'black' : '#e9eef1')} 50%,
		${(props) => (props.complete ? 'black' : '#e9eef1')} 50%
	);
`;

const TaskItem = styled.div`
	border-bottom: 1px solid black;

	input {
		width: 100%;
		background: none;
		border: none;
		text-decoration: ${(props) =>
			props.complete ? 'line-through' : 'none'};
		text-decoration-thickness: 3px;
		font-size: 1.2rem;
		font-family: delve-hand, sans-serif;
		font-weight: 500;
		font-style: normal;

		:focus {
			outline: none;
		}
	}
`;

const Legend = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 26px 20px 20px;

	p {
		margin: 0;
	}
`;

const LegendTitle = styled.p`
	color: #848484;
	justify-self: center;
`;

const Key = styled.div`
	display: grid;
	grid-template-columns: 1fr 1.3fr;
	grid-template-rows: 1fr;

	div {
		justify-self: end;
		margin-right: 0.5rem;
		margin-top: 0.2rem;
	}

	p {
		color: #848484;
	}
`;

const Footer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 0.5rem;
	justify-items: space-between;

	p {
		font-size: 0.8rem;
	}

	p:last-child {
		justify-self: end;
	}

	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.primary};
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const Home = () => {
	const [today, setToday] = useState(null);
	const [taskCopy, setTaskCopy] = useState({});
	const [taskInProgress, setTaskInProgress] = useState({});
	const [taskComplete, setTaskComplete] = useState({});
	const [signalStatus, setSignalStatus] = useState({});

	useEffect(() => {
		const date = new Date();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const year = date.getFullYear();
		setToday(`${month}.${day}.${year}`);
	}, []);

	const signals = ['signal1', 'signal2', 'signal3'];

	const tasks = [
		'task0',
		'task1',
		'task2',
		'task3',
		'task4',
		'task5',
		'task6',
		'task7',
		'task8',
		'task9',
	];

	const handleChange = (event) => {
		const value = event.target.value;
		setTaskCopy({
			...taskCopy,
			[event.target.name]: value,
		});
	};

	const handleTaskUpdate = (event) => {
		if (taskCopy[event.target.id]) {
			setTaskInProgress({
				...taskInProgress,
				[event.target.id]: true,
			});
			if (taskInProgress[event.target.id] === true) {
				setTaskComplete({
					...taskComplete,
					[event.target.id]: true,
				});
			}
		}
	};

	const handleSignalStatusUpdate = (event) => {
		setSignalStatus({
			...signalStatus,
			[event.target.id]: !signalStatus[event.target.id],
		});
	};

	return (
		<Container>
			<Head>
				<title>Analog - The simplest productivity system</title>
				<meta
					name='description'
					content='Analog is a physical companion for your digital tools that helps you prioritize and focus on your most important tasks.'
				/>
				<link
					rel='stylesheet'
					href='https://use.typekit.net/zss2etu.css'
				></link>
			</Head>
			<Header>
				<Title>Analog</Title>
			</Header>
			<CardContainer>
				<Card>
					<CardHeader>
						<CardType>
							<p>Today</p>
						</CardType>
						<Overview>
							<Today>
								<p>{today}</p>
							</Today>
							<Signals>
								{signals.map((signal) => (
									<Signal
										key={signal}
										id={signal}
										complete={signalStatus[signal]}
										onClick={handleSignalStatusUpdate}
									/>
								))}
							</Signals>
						</Overview>
					</CardHeader>
					{tasks.map((task) => {
						return (
							<Task key={task}>
								<TaskCircle
									id={task}
									inProgress={taskInProgress[task]}
									complete={taskComplete[task]}
									onClick={handleTaskUpdate}
								/>
								<TaskItem complete={taskComplete[task]}>
									<input
										type='text'
										name={task}
										value={taskCopy.task}
										onChange={handleChange}
									/>
								</TaskItem>
							</Task>
						);
					})}
				</Card>
				<Legend>
					<LegendTitle>Legend</LegendTitle>
					<Key>
						<TaskCircle inProgress />
						<p>In Progress</p>
					</Key>
					<Key>
						<TaskCircle inProgress complete />
						<p>Complete</p>
					</Key>
				</Legend>
			</CardContainer>
			<Footer>
				<p>
					Original idea by Jeff Sheldon. Legal Stuffs&trade;{' '}
					<a href='https://github.com/dock90/analog'>here.</a>
				</p>
				<p>
					Built by Edward @ <a href='https://dock90.io'>Dock90</a>
				</p>
			</Footer>
		</Container>
	);
};

export default Home;
