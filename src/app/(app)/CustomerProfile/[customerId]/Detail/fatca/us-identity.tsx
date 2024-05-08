"use client"

import ContentLoading from "@/components/content/content-loading";
import InputSwitch from "@/components/custom/input-switch";
import HeaderTitle from "@/components/navbar/header-title";
import HeaderTitleSub from "@/components/navbar/header-title-sub";
import { CustomerFatcaState, QuestionAsnwer } from "@/libs/redux/store/customer-fatca-slice";
import { AnswerFACTA, Choice, QuestionsOutput } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function USIndentity({ useForm }: { useForm: UseFormReturn<CustomerFatcaState, any, undefined> }) {
    const { watch, setValue, getValues } = useForm;
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const params = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['usIdentity', params.customerId],
        queryFn: () => getData(),
    })

    const getData = async () => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/fatca/questions`, { method: 'GET' });
                const response: QuestionsOutput = await request.json();
                const requestAnswers = await fetch(`/api/customer-profile/fatca/answers/${customerId}`, { method: 'GET' });
                const responseAnswers: AnswerFACTA = await requestAnswers.json();
                const { questions, choices } = response;
                const { answers } = responseAnswers;
                // console.log('response', questions)
                if (questions && answers && choices) {
                    let reulst: QuestionAsnwer[] = []
                    questions.map((question) => {
                        const answer = answers.find((answer) => answer.questionId === question.questionId)
                        const answerChoice = choices[`${question.questionId}`]

                        if (answer && answerChoice && question && question.questionId && answer.choiceId && question.questionType) {
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
                        }
                    });
                    // setDefaultData(data.politicRelationInfo)
                    setValue('americaStatus', reulst)
                    return reulst;
                }
            } catch (error) {
                throw error
            }
        }
        return null
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
                isLoading={isLoading}
                error={error && error.message || undefined}
                hight={300}
            >
                <div className="block pl-8">
                    <HeaderTitleSub
                        title="บุคคลอเมริกัน"
                        isBorder={false}
                    />
                    {
                        watch('americaStatus').filter((x) => x.question.questionType === 'W9').map((item, index) => (
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
                                            setValue('isW9', true)
                                            setValue(`americaStatus.${index}.choiceId`, choice.choiceId)
                                            setValue(`americaStatus.${index}.isCheck`, true)
                                        }
                                    } else {
                                        const choice = item.choices.find((x: Choice) => x.choiceTextTh !== 'ใช่')
                                        if (choice && choice.choiceId) {
                                            setValue(`americaStatus.${index}.choiceId`, choice.choiceId)
                                            setValue(`americaStatus.${index}.isCheck`, false)
                                            const isRecheck = reCheckStatusAll(item.question.questionType)
                                            if (!isRecheck) {
                                                setValue('isW9', false)
                                            }
                                        }
                                    }
                                }}
                            />
                        ))
                    }
                    <HeaderTitleSub
                        title="คำถามเพิ่มเติม"
                        isBorder={false}
                    />
                    {
                        data?.filter((x) => x.question.questionType === 'W8').map((item, index) => (
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
                                            setValue('isW8', true)
                                            setValue(`americaStatus.${index}.choiceId`, choice.choiceId)
                                            setValue(`americaStatus.${index}.isCheck`, true)
                                        }
                                    } else {
                                        const choice = item.choices.find((x: Choice) => x.choiceTextTh !== 'ใช่')
                                        if (choice && choice.choiceId) {
                                            setValue(`americaStatus.${index}.choiceId`, choice.choiceId)
                                            setValue(`americaStatus.${index}.isCheck`, false)
                                            const isRecheck = reCheckStatusAll(item.question.questionType)
                                            if (!isRecheck) {
                                                setValue('isW8', false)
                                            }
                                        }
                                    }
                                }}
                            />
                        ))
                    }
                </div>
            </ContentLoading>

        </>
    )
}