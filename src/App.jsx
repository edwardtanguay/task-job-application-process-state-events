import './App.scss';
import jobs from './data/jobs.json';

function App() {
	const displayKind = 'full';

	return (
		<div className="App">
			<h1>Job Application Process</h1>
			{displayKind === 'full' ? (
				<div className="jobs">
					{jobs.map((job, index) => {
						return (
							<>
								<div key={index} className="job">
									<div className="position">
										<a href={job.url}>{job.position}</a>
									</div>
									<div className="skills">{job.skills}</div>
									<div className="bulkText">
										{job.bulkText}
									</div>
								</div>
							</>
						);
					})}
				</div>
			) : (
				<ul className="jobList">
					{jobs.map((job, index) => {
						return (
							<>
								<li key={index}>
									<a href={job.url}>{job.position}</a>
								</li>
							</>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default App;
