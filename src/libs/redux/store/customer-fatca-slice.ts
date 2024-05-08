import { Choice, GetFatcaW8Output, GetFatcaW9Output, Question } from '@/services/rest-api/customer-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// Define a type for the slice state
export interface CustomerFatcaState {
    americaStatus: QuestionAsnwer[],
    isW8: boolean
    isW9: boolean
    isAmerica: boolean
    isFatcaIndividualSelfCert: boolean
    tinType: string,
    w9: GetFatcaW9Output | null
    w8: GetFatcaW8Output | null
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
    isFatcaIndividualSelfCert: false,
    tinType: '1',
    w9: {
        name: "",
        businessName: "",
        appropriate: "Individual / sole proprietor or single-member LLC",
        address1: "",
        address2: "",
        address3: "",
        zipCode: "",
        accountList: "",
        ssn: "",
        ein: "",
        exemptionPayeeCode: "",
        exemptionReportingCode: "",
        refId: "",
        refType: ""
    },
    w8: null
}

export const customerFatcaSlice = createSlice({
    name: 'customer-fatca',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setFatcaIndividualSelfCert: (state, action: PayloadAction<boolean>) => {
            state.isFatcaIndividualSelfCert = action.payload
        },
        setTinType: (state, action: PayloadAction<string>) => {
            state.tinType = action.payload
        },
        setAmericaStatus: (state, action: PayloadAction<QuestionAsnwer[]>) => {
            state.americaStatus = action.payload
        },
        setIsAmerica: (state, action: PayloadAction<boolean>) => {
            state.isAmerica = action.payload
        }
    }
})

export const {
    setFatcaIndividualSelfCert,
    setTinType,
    setAmericaStatus,
    setIsAmerica
} = customerFatcaSlice.actions

export default customerFatcaSlice.reducer