import { useDispatch, useSelector } from "react-redux"
import { PLAYER_ROUND } from "../state/gameSlice"
import { FIG } from "../utils/utils"
import "./Choice.css"
import lizard from "/lizard.png"
import paper from "/paper.png"
import rock from "/rock.png"
import scissors from "/scissors.png"
import spock from "/spock.png"

export default function Choice({ isPlayer, sign }) {
	const state = useSelector((state) => state.game)
	const dispatch = useDispatch()

	let src = null
	if (sign === FIG.LIZARD) src = lizard
	if (sign === FIG.PAPER) src = paper
	if (sign === FIG.ROCK) src = rock
	if (sign === FIG.SCISSORS) src = scissors
	if (sign === FIG.SPOCK) src = spock

	const selected = isPlayer
		? state.round.player === sign
		: state.round.ai === sign

	function handleClick() {
		if (isPlayer) {
			dispatch(PLAYER_ROUND(sign))
		}
	}

	return (
		<figure className={selected ? "selected" : ""} onClick={handleClick}>
			<img src={src}></img>
			<figcaption>{sign}</figcaption>
		</figure>
	)
}
