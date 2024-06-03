import { useSelector } from "react-redux"
import { FIG } from "../utils/utils"
import Choice from "./Choice"

export default function ChoiceList({ isPlayer }) {
	const state = useSelector((state) => state.game)
	return (
		<div>
			<Choice sign={FIG.ROCK} isPlayer={isPlayer}></Choice>
			<Choice sign={FIG.PAPER} isPlayer={isPlayer}></Choice>
			<Choice sign={FIG.SCISSORS} isPlayer={isPlayer}></Choice>
			{state.isExtended && (
				<>
					<Choice sign={FIG.SPOCK} isPlayer={isPlayer}></Choice>
					<Choice sign={FIG.LIZARD} isPlayer={isPlayer}></Choice>
				</>
			)}
		</div>
	)
}
