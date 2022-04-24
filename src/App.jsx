import './App.scss';
import jobs from './data/jobs.json';

function App() {
	let displayKind = 'full';

	const handleToggleView = () => {
		displayKind = displayKind === 'full' ? 'list' : 'full';
		console.log(displayKind);
	};

	return (
		<div className="App">
			<h1>Job Application Process</h1>
			<button onClick={handleToggleView}>Toggle View</button>
			{displayKind === 'full' ? (
				<div className="jobs">
					{jobs.map((job, index) => {
						return (
							<div key={index}>
								<div key={index} className="job">
									<div className="position">
										<a href={job.url}>{job.position}</a>
									</div>
									<div className="skills">{job.skills}</div>
									<div className="bulkText">
										{job.bulkText}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<ul className="jobList">
					{jobs.map((job, index) => {
						return (
							<div key={index}>
								<li key={index}>
									<a href={job.url}>{job.position}</a>
								</li>
							</div>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default App;
