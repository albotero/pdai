import React from "react"
import { useState } from "react"
import { ScrollView } from "react-native"
import { FadeIn } from "react-native-reanimated"
import { useFocusEffect } from "@react-navigation/native"

import Score from "@components/score"
import ScoreSection from "@components/score-section"
import { PdaiContext, PdaiDataInterface, PdaiSections, SelectedLocations } from "./context"
import * as S from "./styles"

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

    const resetPdaiData = () => {
        Object.keys(SelectedLocations).map((key: string) => (SelectedLocations[key] = null))
        pdaiData.map((data: PdaiDataInterface) => {
            data.selAct = 0
            if (data.selDam) data.selDam = 0
        })
        setPdaiData(PdaiSections)
    }

    useFocusEffect(React.useCallback(() => setPdaiData([...pdaiData]), []))

    return (
        <S.Container>
            <PdaiContext.Provider value={{ pdaiData, updatePdaiData, resetPdaiData }}>
                <S.Body entering={FadeIn.duration(2000)}>
                    <ScrollView style={{ padding: 5 }}>
                        <ScoreSection section="skin" />
                        <ScoreSection section="scalp" />
                        <ScoreSection section="mucousMembrane" />
                    </ScrollView>
                    <Score />
                </S.Body>
            </PdaiContext.Provider>
        </S.Container>
    )
}
