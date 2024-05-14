import HeaderTitle from "@/components/navbar/header-title";
import HeaderTitleSub from "@/components/navbar/header-title-sub";
import { CustomerFatcaState } from "@/libs/redux/store/customer-fatca-slice";
import { EmergencyContactInfoModel } from "@/services/rest-api/customer-service";
import { Property } from "csstype";
import { ReactElement } from "react";
import SummaryExistUSIDTableInfo from "./table";
import SummaryW8 from "./w8";
import SummaryW9 from "./w9";

interface DetailSection<T> {
    name?: keyof T
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
    condition?: (data: T) => boolean
    isFull?: boolean
    labelAlign?: Property.TextAlign
}
//contractInformation

const fieldList = ({ data }: { data: EmergencyContactInfoModel }): Array<DetailSection<EmergencyContactInfoModel>> => {
    return (
        [
            {
                label: 'ชื่อ-นามสกุล',
                name: 'name',
            },
            {
                label: 'โทรศัพท์มือถือ',
                name: 'mobile',
            },
            {
                label: 'ความสัมพันธ์',
                name: 'relationshipCode',
            }
        ]
    )
}

const getValueFromFieldName = (attributeName: string, data: EmergencyContactInfoModel | undefined | null, normalize?: string): string | number | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as EmergencyContactInfoModel, value) : value
}

const normalizationData = (name: string, data: EmergencyContactInfoModel, defaultValue: string | number | boolean): string => {
    switch (name) {
        case 'addressTypeCode':
            return defaultValue === '01' ? `ตามประเภทหลักฐาน` : `อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)`;
        default:
            return defaultValue?.toString() || '-';
    }
}

export default function SummaryFatcaInfo({ data }: { data: CustomerFatcaState }) {

    const { americaStatus = [], tinType } = data
    const { answerInput = [], fatcaW8Input = {}, fatcaW9Input = {}, tinInput = [] } = data?.confirm || {}

    const W9Questions = americaStatus.filter((q) => q.question.questionType === 'W9').map(q => q.questionId) || []
    const W8Questions = americaStatus.filter((q) => q.question.questionType === 'W8').map(q => q.questionId) || []


    return (<>
        <HeaderTitle
            className="gap-0"
            title="ส่วนที่ 1 สถานะความเป็นบุคคลอเมริกัน"
        />
        <div className="block pl-8">
            {
                answerInput ?
                    <>
                        <HeaderTitleSub
                            title="บุคคลอเมริกัน"
                            isBorder={false}
                        />
                        {
                            answerInput?.filter(a => W9Questions.includes(a.questionId)).map((ans) => {
                                const question: Array<any> = americaStatus.filter(a => a.questionId === ans.questionId) || []
                                if (!question && question?.length === 0) return null;
                                const choice = question[0].choices.filter((c) => c.choiceId === ans.choiceId) || []

                                return <div>
                                    {question[0].question.questionTextTh}
                                    {choice[0]?.choiceTextTh}
                                </div>
                            })
                        }

                        <HeaderTitleSub
                            title="คำถามเพิ่มเติม"
                            isBorder={false}
                        />
                        {
                            answerInput?.filter(a => W8Questions.includes(a.questionId)).map((ans) => {
                                const question: Array<any> = americaStatus.filter(a => a.questionId === ans.questionId) || []
                                if (!question && question?.length === 0) return null;
                                const choice = question[0].choices.filter((c) => c.choiceId === ans.choiceId) || []

                                return <div>
                                    {question[0].question.questionTextTh}
                                    {choice[0]?.choiceTextTh}
                                </div>
                            })
                        }
                    </>
                    : null
            }

        </div>

        <SummaryExistUSIDTableInfo
            data={tinInput || []}
        />

        <SummaryW9 {...fatcaW9Input} tinType={tinType} />
        <SummaryW8 {...fatcaW8Input} />
    </>)
}