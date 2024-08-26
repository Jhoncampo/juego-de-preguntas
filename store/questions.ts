import { Question } from "@/interfaces";
import { create } from "zustand";

interface State {
    questions: Question[],
    currentQuestion: number

}

export const useQuestionStore = create<State>((set, get) => ({
    questions: [],
    currentQuestion: 0

}))