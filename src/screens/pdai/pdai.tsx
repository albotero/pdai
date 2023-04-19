import { createContext, useContext, useState } from "react"
import { ScrollView } from "react-native"
import { FadeIn } from "react-native-reanimated"

import { AppContext, AppContextType } from "../../../App"
import Header, { HeaderButton } from "../../components/header/header"
import i18n from "../../common/localization"
import Score from "../../components/score/score"
import ScoreSection from "../../components/score-section/score-section"
import { PdaiContextType, PdaiDataInterface, PdaiSections } from "./context"
import * as S from "./styles"

export const PdaiContext = createContext<PdaiContextType | null>(null)

export default function Pdai(): JSX.Element {
    const { setShowLang: setShowLang } = useContext(AppContext) as AppContextType
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
        <S.Container>
            <Header
                title={i18n.t("pdaiScore")}
                buttons={[
                    <HeaderButton key="acknowledgements" text={"\u{1F516}"} textSize={16} action={() => {}} />,
                    <HeaderButton
                        key="changeLanguage"
                        text={i18n.t("languageFlag")}
                        textSize={18}
                        action={() => setShowLang && setShowLang(true)}
                    />,
                    <HeaderButton key="clearData" text={"\u{1F5D1}"} textSize={16} action={() => {}} />,
                ]}
            />
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
