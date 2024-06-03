import { createSlice } from "@reduxjs/toolkit"
import { FIG, getGameResult } from "../utils/utils"

const initialState = {
	isGameStarted: false,
	isExtended: false,
	round: {
		player: null,
		ai: null
	},
	history: []
}

function getRandomInt(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		NEW_GAME(state) {
			state.isGameStarted = true
			state.round.player = null
			state.round.ai = null
			state.history = []
		},
		PLAYER_ROUND(state, { payload }) {
			state.round.player = payload
		},
		AI_ROUND(state) {
			const randomIndex = getRandomInt(
				0,
				Object.values(FIG).length - (!state.isExtended ? 2 : 0)
			)
			const randomSign = Object.values(FIG)[randomIndex]
			state.round.ai = randomSign

			state.history.push({
				winner: getGameResult(state.round.player, state.round.ai),
				player: state.round.player,
				ai: state.round.ai
			})
		},
		CHANGE_MODE(state) {
			state.isExtended = !state.isExtended
			state.round.player = null
			state.round.ai = null
		}
	}
})

export const { NEW_GAME, PLAYER_ROUND, AI_ROUND, CHANGE_MODE } =
	gameSlice.actions
