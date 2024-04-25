"use client"

import ContentLoading from "@/components/content/content-loading";
import InputSwitch from "@/components/custom/input-switch";
import HeaderTitle from "@/components/navbar/header-title";
import HeaderTitleSub from "@/components/navbar/header-title-sub";
import { AnswerFACTA, QuestionsOutput } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function USIndentity() {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm<SubmitInput>()
    const [isEditable, setIsEditable] = React.useState<boolean>(false);


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
                const { questions } = response;
                const { answers, isFatcaIndividualSelfCert } = responseAnswers;
                console.log(isFatcaIndividualSelfCert)
                if (questions && answers) {
                    let data = questions.map((question) => {
                        const answer = answers.find((answer) => answer.questionId === question.questionId)
                        if (answer) {
                            if (answer.answerTextTh !== 'ไม่ใช่') {
                                return {
                                    ...question,
                                    isCheck: true,
                                }
                            }
                        }
                        return {
                            ...question,
                            isCheck: false,
                        }
                    });
                    // setDefaultData(data.politicRelationInfo)
                    return data
                }
            } catch (error) {
                throw error
            }
        }
        return null
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
                    <div className="px-10">
                        {
                            data?.filter((x) => x.questionType === 'W9').map((item, index) => (
                                <InputSwitch
                                    key={index}
                                    label={item.questionTextTh || ''}
                                    name={"question-" + item.questionId}
                                    defaultValue={item.isCheck}
                                // disabled
                                />
                            ))
                        }
                    </div>
                    <HeaderTitleSub
                        title="คำถามเพิ่มเติม"
                        isBorder={false}
                    />
                    <div className="px-10">
                        {
                            data?.filter((x) => x.questionType === 'W8').map((item, index) => (
                                <InputSwitch
                                    key={index}
                                    label={item.questionTextTh || ''}
                                    name={"question-" + item.questionId}
                                    defaultValue={item.isCheck}
                                // disabled
                                />
                            ))
                        }
                    </div>

                </div>
            </ContentLoading>

        </>
    )
}

interface SubmitInput {
    politicianRelation: boolean;
    politicianPosition: string;
}