import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import { AI_ROUND, CHANGE_MODE, NEW_GAME } from "./state/gameSlice"
import ChoiceList from "./view/ChoiceList"
import main from "/main.png"

function App() {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.game)
	return (
		<>
			<h1>ROCK PAPER SCISSORS LIZARD SPOCK</h1>

			{state.isGameStarted ? (
				<>
					<div className="container left">
						<div className="border">
							<ChoiceList isPlayer={false}></ChoiceList>
							<h2>AI</h2>
							<button
								disabled={state.round.player === null}
								onClick={() => dispatch(AI_ROUND())}
							>
								AI
							</button>
						</div>
						<div className="border">
							<h2>PLAYER</h2>
							<ChoiceList isPlayer={true}></ChoiceList>
						</div>
						<button onClick={() => dispatch(NEW_GAME())}>New Game</button>
						<button onClick={() => dispatch(CHANGE_MODE())}>Change Mode</button>
					</div>
					<div className="container right">
						<table className="history-table">
							<thead>
								<tr>
									<th>Winner</th>
									<th>Player</th>
									<th>AI</th>
								</tr>
							</thead>
							<tbody>
								{state.history.map((record, index) => (
									<tr key={index}>
										<td>{record.winner}</td>
										<td>{record.player}</td>
										<td>{record.ai}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</>
			) : (
				<div className="container full-width">
					<img src={main} className="main-logo"></img>
					<button onClick={() => dispatch(NEW_GAME())}>New Game</button>
				</div>
			)}
		</>
	)
}

export default App
