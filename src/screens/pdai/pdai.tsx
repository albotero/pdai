import React from "react"
import { createContext, useState } from "react"
import { ScrollView } from "react-native"
import { FadeIn } from "react-native-reanimated"
import { useFocusEffect } from "@react-navigation/native"

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

    useFocusEffect(React.useCallback(() => setPdaiData([...pdaiData]), []))

    return (
        <S.Container>
            <PdaiContext.Provider value={{ pdaiData, updatePdaiData }}>
                <S.Body entering={FadeIn.duration(2000)}>
                    <ScrollView style={{ padding: 5 }}>
                        <ScoreSection section="skin" />
                        <ScoreSection section="scalp" />
                        <ScoreSection section="mucousMembrane" />
                    </ScrollView>
                    <Score score={calcScore()} />
                </S.Body>
            </PdaiContext.Provider>
        </S.Container>
    )
}
