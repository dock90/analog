'use client';

import { useEffect, useState } from 'react';

export default function Home() {
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
		<div className='container'>
			<div className='header'>
				<h1 className='title'>Analog</h1>
			</div>
			<div className='card-container'>
				<div className='card'>
					<div className='card-header'>
						<div>
							<p>Today</p>
						</div>
						<div className='overview'>
							<div>
								<p>{today}</p>
							</div>
							<div>
								{signals.map((signal) => (
									<div
										key={signal}
										id={signal}
										className={`signal${signalStatus[signal] ? ' complete' : ''}`}
										onClick={handleSignalStatusUpdate}
									/>
								))}
							</div>
						</div>
					</div>
					{tasks.map((task) => (
						<div key={task} className='task'>
							<div
								id={task}
								className={`task-circle${taskInProgress[task] ? ' in-progress' : ''}${taskComplete[task] ? ' complete' : ''}`}
								onClick={handleTaskUpdate}
							/>
							<div
								className={`task-item${taskComplete[task] ? ' complete' : ''}`}
							>
								<input
									type='text'
									name={task}
									value={taskCopy.task}
									onChange={handleChange}
								/>
							</div>
						</div>
					))}
				</div>
				<div className='legend'>
					<p className='legend-title'>Legend</p>
					<div className='key'>
						<div className='task-circle in-progress' />
						<p>In Progress</p>
					</div>
					<div className='key'>
						<div className='task-circle complete' />
						<p>Complete</p>
					</div>
				</div>
			</div>
			<div className='footer'>
				<p>
					Original idea by Jeff Sheldon. Legal Stuffs&trade;{' '}
					<a href='https://github.com/dock90/analog'>here.</a>
				</p>
				<p>
					Built by Edward @ <a href='https://dock90.io'>Dock90</a>
				</p>
			</div>
		</div>
	);
}
