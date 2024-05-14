"use client"

import ContentLoading from "@/components/content/content-loading";
import InputSwitch from "@/components/custom/input-switch";
import HeaderTitle from "@/components/navbar/header-title";
import HeaderTitleSub from "@/components/navbar/header-title-sub";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { CustomerFatcaState, QuestionAsnwer, setAmericaStatus } from "@/libs/redux/store/customer-fatca-slice";
import { AnswerFACTA, Choice, QuestionsOutput } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function USIndentity({ useForm }: { useForm: UseFormReturn<CustomerFatcaState, any, undefined> }) {
    const { watch, setValue, getValues } = useForm;
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const params = useParams()
    const dispatch = useAppDispatch()

    const { data, isLoading, error } = useQuery({
        queryKey: ['usIdentity', params.customerId],
        queryFn: () => getData(),
    })

    const confirmAnswerInput = useAppSelector(state => state.cusomterFatca.americaStatus)

    const setDefaultDataChange = () => {
        setTimeout(() => {
            if (confirmAnswerInput && confirmAnswerInput.length > 0) {
                try {
                    setValue('americaStatus', confirmAnswerInput, { shouldDirty: true })
                    const isW9 = confirmAnswerInput.findIndex((x: QuestionAsnwer) => x.question.questionType === 'W9' && x.isCheck === true)
                    const isW8 = confirmAnswerInput.findIndex((x: QuestionAsnwer) => x.question.questionType === 'W8' && x.isCheck === true)
                    if (isW9 !== -1) {
                        setValue('isW9', true, { shouldDirty: true })
                    }
                    if (isW8 !== -1) {
                        setValue('isW8', true, { shouldDirty: true })
                    }
                } catch (err) {
                    console.error(err)
                }
            }
        }, 100)
    }

    const getData = async (): Promise<QuestionAsnwer[]> => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/fatca/questions`, { method: 'GET' });
                const response: QuestionsOutput = await request.json();
                const requestAnswers = await fetch(`/api/customer-profile/fatca/answers/${customerId}`, { method: 'GET' });
                const responseAnswers: AnswerFACTA = await requestAnswers.json();
                const { questions, choices } = response;
                const { answers } = responseAnswers;
                if (questions && answers && choices) {
                    let reulst: QuestionAsnwer[] = []
                    questions.map((question) => {
                        let answer = answers.find((answer) => answer.questionId === question.questionId)
                        const answerChoice = choices[`${question.questionId}`]

                        if (answerChoice && question && question.questionId && question.questionType) {
                            if (answer && answer.choiceId) {
                                if (answer.answerTextTh !== 'ไม่ใช่') {
                                    if (question.questionType === 'W8')
                                        setValue('isW8', true)
                                    if (question.questionType === 'W9')
                                        setValue('isW9', true)

                                    reulst.push({
                                        question: question,
                                        choices: answerChoice,
                                        questionId: question.questionId,
                                        choiceId: answer.choiceId,
                                        isCheck: true,
                                    })

                                } else {
                                    reulst.push({
                                        question: question,
                                        choices: answerChoice,
                                        questionId: question.questionId,
                                        choiceId: answer.choiceId,
                                        isCheck: false,
                                    })
                                }
                            } else {
                                const defaultChoice = answerChoice.find((x: Choice) => x.choiceTextTh === 'ไม่ใช่');
                                if (defaultChoice) {
                                    reulst.push({
                                        question: question,
                                        choices: answerChoice,
                                        questionId: question.questionId,
                                        choiceId: defaultChoice.choiceId || 0,
                                        isCheck: false,
                                    })
                                } else {
                                    const defaultFixChoice = answerChoice[1];
                                    if (defaultFixChoice) {
                                        reulst.push({
                                            question: question,
                                            choices: answerChoice,
                                            questionId: question.questionId,
                                            choiceId: defaultFixChoice.choiceId || 0,
                                            isCheck: false,
                                        })
                                    }
                                }
                            }
                        }
                    });
                    // console.log('reulst : ', reulst)
                    setValue('americaStatus', reulst)
                    dispatch(setAmericaStatus(reulst))
                    setDefaultDataChange()
                    return reulst;
                }
                setDefaultDataChange()
            } catch (error) {
                throw error
            }
        }
        return []
    }

    const reCheckStatusAll = (type: string | null | undefined): boolean => {
        const data = getValues('americaStatus')
        const filterType = data.filter((x: QuestionAsnwer) => x.question.questionType === type)
        const result = filterType.findIndex((x: QuestionAsnwer) => x.isCheck === true)
        return result !== -1 ? true : false
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ส่วนที่ 1 สถานะความเป็นบุคคลอเมริกัน"
            />
            <ContentLoading
                isLoading={isLoading || watch('americaStatus').length === 0}
                error={error && error.message || undefined}
                hight={300}
            >
                <div className="block pl-8">
                    <HeaderTitleSub
                        title="บุคคลอเมริกัน"
                        isBorder={false}
                    />
                    {
                        watch('americaStatus').map((item, index) => {
                            if (item.question.questionType === 'W9')
                                return (
                                    <InputSwitch
                                        key={index}
                                        label={item.question.questionTextTh || ''}
                                        name={"question-" + item.question.questionId}
                                        defaultValue={item.isCheck}
                                        disabled={!isEditable}
                                        onChange={(x) => {
                                            if (x) {
                                                const choice = item.choices.find((x: Choice) => x.choiceTextTh === 'ใช่')
                                                if (choice && choice.choiceId) {
                                                    setValue('isW9', true, { shouldDirty: true })
                                                    setValue(`americaStatus.${index}.choiceId`, choice.choiceId, { shouldDirty: true })
                                                    setValue(`americaStatus.${index}.isCheck`, true, { shouldDirty: true })
                                                }
                                            } else {
                                                const choice = item.choices.find((x: Choice) => x.choiceTextTh !== 'ใช่')
                                                if (choice && choice.choiceId) {
                                                    setValue(`americaStatus.${index}.choiceId`, choice.choiceId, { shouldDirty: true })
                                                    setValue(`americaStatus.${index}.isCheck`, false, { shouldDirty: true })
                                                    const isRecheck = reCheckStatusAll(item.question.questionType)
                                                    if (!isRecheck) {
                                                        setValue('isW9', false, { shouldDirty: true })
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                )
                            return null
                        })
                    }
                    <HeaderTitleSub
                        title="คำถามเพิ่มเติม"
                        isBorder={false}
                    />
                    {
                        watch('americaStatus').map((item, index) => {
                            if (item.question.questionType === 'W8')
                                return (
                                    <InputSwitch
                                        key={index}
                                        label={item.question.questionTextTh || ''}
                                        name={"question-" + item.question.questionId}
                                        defaultValue={item.isCheck}
                                        disabled={!isEditable}
                                        onChange={(x) => {
                                            if (x) {
                                                const choice = item.choices.find((x: Choice) => x.choiceTextTh === 'ใช่')
                                                if (choice && choice.choiceId) {
                                                    setValue('isW8', true, { shouldDirty: true })
                                                    setValue(`americaStatus.${index}.choiceId`, choice.choiceId, { shouldDirty: true })
                                                    setValue(`americaStatus.${index}.isCheck`, true, { shouldDirty: true })
                                                }
                                            } else {
                                                const choice = item.choices.find((x: Choice) => x.choiceTextTh !== 'ใช่')
                                                if (choice && choice.choiceId) {
                                                    setValue(`americaStatus.${index}.choiceId`, choice.choiceId, { shouldDirty: true })
                                                    setValue(`americaStatus.${index}.isCheck`, false, { shouldDirty: true })
                                                    const isRecheck = reCheckStatusAll(item.question.questionType)
                                                    if (!isRecheck) {
                                                        setValue('isW8', false, { shouldDirty: true })
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                )
                            return null
                        })
                    }
                </div>
            </ContentLoading>

        </>
    )
}