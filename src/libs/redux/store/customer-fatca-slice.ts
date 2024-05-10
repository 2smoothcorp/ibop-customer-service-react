import { Choice, FatcaW8Input, FatcaW9Input, GetFatcaW8Output, GetFatcaW9Output, GetTinOutput, Question } from '@/services/rest-api/customer-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// Define a type for the slice state
export interface CustomerFatcaState {
    americaStatus: QuestionAsnwer[],
    isW8: boolean
    isW9: boolean
    isAmerica: boolean
    isFatcaIndividualSelfCert: boolean | null
    tinType: string,
    w9: GetFatcaW9Output | null
    w8: GetFatcaW8Output | null,
    tinInput: GetTinOutput[] | null
    confirm: Confirm | null
}

interface Confirm {
    answerInput: AnswerInput[] | null,
    fatcaW8Input: FatcaW8Input | null,
    fatcaW9Input: FatcaW9Input | null,
    isFatcaIndividualSelfCertified: boolean | null,
    tinInput: GetTinOutput[] | null
}

export interface AnswerInput {
    questionId: number
    choiceId: number
}

export interface QuestionAsnwer {
    question: Question
    choices: Choice[]
    questionId: number
    choiceId: number
    isCheck: boolean
}

// Define the initial state using that type
const initialState: CustomerFatcaState = {
    americaStatus: [],
    isW8: false,
    isW9: false,
    isAmerica: false,
    isFatcaIndividualSelfCert: null,
    tinType: '1',
    w9: null,
    w8: null,
    tinInput: null,
    confirm: null
}

export const customerFatcaSlice = createSlice({
    name: 'customer-fatca',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setAnswerInput: (state, action: PayloadAction<AnswerInput[]>) => {
            if (state.confirm) {
                state.confirm.answerInput = action.payload
            } else {
                state.confirm = {
                    answerInput: action.payload,
                    fatcaW8Input: null,
                    fatcaW9Input: null,
                    isFatcaIndividualSelfCertified: null,
                    tinInput: null
                }
            }
        },
        setFatcaW8Input: (state, action: PayloadAction<FatcaW8Input | null>) => {
            if (state.confirm) {
                state.confirm.fatcaW8Input = action.payload
            } else {
                state.confirm = {
                    answerInput: null,
                    fatcaW8Input: action.payload,
                    fatcaW9Input: null,
                    isFatcaIndividualSelfCertified: null,
                    tinInput: null
                }
            }
        },
        setFatcaW9Input: (state, action: PayloadAction<FatcaW9Input | null>) => {
            if (state.confirm) {
                state.confirm.fatcaW9Input = action.payload
            } else {
                state.confirm = {
                    answerInput: null,
                    fatcaW8Input: null,
                    fatcaW9Input: action.payload,
                    isFatcaIndividualSelfCertified: null,
                    tinInput: null
                }
            }
        },
        setIsFatcaIndividualSelfCertified: (state, action: PayloadAction<boolean>) => {
            if (state.confirm) {
                state.confirm.isFatcaIndividualSelfCertified = action.payload
            } else {
                state.confirm = {
                    answerInput: null,
                    fatcaW8Input: null,
                    fatcaW9Input: null,
                    isFatcaIndividualSelfCertified: action.payload,
                    tinInput: null
                }
            }
        },
        setTinInput: (state, action: PayloadAction<GetTinOutput[]>) => {
            if (state.confirm) {
                state.confirm.tinInput = action.payload
            } else {
                state.confirm = {
                    answerInput: null,
                    fatcaW8Input: null,
                    fatcaW9Input: null,
                    isFatcaIndividualSelfCertified: null,
                    tinInput: action.payload
                }
            }
        },
    }
})

export const {
    setAnswerInput,
    setFatcaW8Input,
    setFatcaW9Input,
    setIsFatcaIndividualSelfCertified,
    setTinInput
} = customerFatcaSlice.actions

export default customerFatcaSlice.reducer