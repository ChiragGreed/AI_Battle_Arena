import { StateSchema, MessagesValue, StateGraph, START, END } from "@langchain/langgraph";


type JUDGEMENT = {
    winner: string,
    solution1Score: number,
    solution2Score: number,
}

type AI_BATTLE_ARENA = {
    message: typeof MessagesValue,
    solution1: string,
    solution2: string,
    judgement: JUDGEMENT
}

const state: AI_BATTLE_ARENA = {
    message: MessagesValue,
    solution1: "",
    solution2: "",
    judgement: {
        winner: "Solution1",
        solution1Score: 1,
        solution2Score: 0,
    },
}