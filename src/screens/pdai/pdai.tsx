import { createContext, useState } from "react"
import { ScrollView, Text } from "react-native"
import { FadeIn } from "react-native-reanimated"

import i18n from "../../common/localization"
import Score from "../../components/score/score"
import ScoreSection from "../../components/score-section/score-section"

import { PdaiContextType, PdaiDataInterface, PdaiSections } from "./context"
import * as S from "./styles"

export const PdaiContext = createContext<PdaiContextType | null>(null)

export default function Pdai(): JSX.Element {
    const [pdaiData, setPdaiData] = useState<PdaiDataInterface[]>(PdaiSections)

    const updatePdaiData = (data: PdaiDataInterface) => {
        pdaiData.filter((d: PdaiDataInterface) => {
            if (d.id == data.id) {
                if (d.activity) d.selAct = data.selAct
                if (d.damage) d.selDam = data.selDam
                setPdaiData([...pdaiData])
            }
        })
    }

    const calcScore = () => {
        let score: number = 0
        for (const data of pdaiData) {
            score += data.selAct
            score += data.selDam || 0
        }
        return score
    }

    return (
        <S.Container entering={FadeIn.duration(1000)}>
            <S.Header>
                <S.HeaderTitle>
                    <S.Title>{i18n.t("pdaiScore")}</S.Title>
                </S.HeaderTitle>
                <HeaderButton text={"\u{1F516}"} textSize={16} />
                <HeaderButton text={i18n.t("languageFlag")} textSize={18} />
                <HeaderButton text={"\u{1F5D1}"} textSize={16} />
            </S.Header>
            <PdaiContext.Provider value={{ pdaiData, updatePdaiData }}>
                <ScrollView style={{ padding: 5 }}>
                    <ScoreSection section="skin" />
                    <ScoreSection section="scalp" />
                    <ScoreSection section="mucousMembrane" />
                </ScrollView>
                <Score score={calcScore()} />
            </PdaiContext.Provider>
        </S.Container>
    )
}

interface ButtonProps {
    text: string
    textSize: number
}

function HeaderButton({ text, textSize }: ButtonProps): JSX.Element {
    return (
        <S.Button onPress={() => {}}>
            <Text style={{ fontSize: textSize }}>{text}</Text>
        </S.Button>
    )
}
