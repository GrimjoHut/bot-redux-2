import { IMapArrowCodes, IEndGameConditions } from "./components/types"

export const MAP_ARROW_CODES: IMapArrowCodes = {
    ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
}

export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES)

export const END_GAME_CONDITIONS: IEndGameConditions = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3
}