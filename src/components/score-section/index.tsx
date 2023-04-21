import { useContext } from "react"
import { View } from "react-native"

import i18n, { Rtl } from "@common/localization"
import { PdaiContext, PdaiContextType, PdaiDataInterface, SelectedLocations } from "@screens/pdai/context"
import Location from "../location"
import * as S from "./styles"

interface ScoreSectionProps {
    section: string
}

export default function ScoreSection({ section }: ScoreSectionProps): JSX.Element {
    const { pdaiData } = useContext(PdaiContext) as PdaiContextType
    const selectedLocation = SelectedLocations[section]
    const sectionData = pdaiData.filter((data: PdaiDataInterface) => data.section == section)

    const calcScore = (property: string) => {
        let score: number = 0
        for (const location of sectionData) {
            switch (property) {
                case "activity":
                    score += location.selAct
                    break
                case "damage":
                    score += location.selDam || 0
                    break
            }
        }
        return score
    }

    return (
        <S.Container>
            <S.Header style={{ flexDirection: Rtl() ? "row-reverse" : "row" }}>
                <S.Title style={{ textAlign: Rtl() ? "right" : "left" }}>{i18n.t(section)}</S.Title>
                <View>
                    <S.ScoreText style={{ textAlign: Rtl() ? "left" : "right" }}>
                        {Rtl()
                            ? `${i18n.t("activity")}: ${sectionData.length * 10}/${calcScore("activity")}`
                            : `${i18n.t("activity")}: ${calcScore("activity")}/${sectionData.length * 10}`}
                    </S.ScoreText>
                    {sectionData[0].damage && (
                        <S.ScoreText style={{ textAlign: Rtl() ? "left" : "right" }}>
                            {Rtl()
                                ? `${i18n.t("damage")}: ${sectionData.length * 10}/${calcScore("damage")}`
                                : `${i18n.t("damage")}: ${calcScore("damage")}/${sectionData.length * 10}`}
                        </S.ScoreText>
                    )}
                </View>
            </S.Header>
            <S.Locations>
                {sectionData.map((data: PdaiDataInterface) => (
                    <Location key={data.id} data={data} visible={data.id == selectedLocation} />
                ))}
            </S.Locations>
        </S.Container>
    )
}
