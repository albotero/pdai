import { useContext } from "react"

import i18n from "../../common/localization"
import { PdaiContextType, PdaiDataInterface, SelectedLocations } from "../../screens/pdai/context"
import { PdaiContext } from "../../screens/pdai/pdai"
import Location from "../location/location"
import * as S from "./styles"

interface ScoreSectionProps {
    section: string
}

export default function ScoreSection({ section }: ScoreSectionProps): JSX.Element {
    const { pdaiData, updatePdaiData } = useContext(PdaiContext) as PdaiContextType
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
            <S.Header>
                <S.Title>{i18n.t(section)}</S.Title>
                <S.Score>
                    <S.ScoreText>
                        {i18n.t("activity")}: {calcScore("activity")}/{sectionData.length * 10}
                    </S.ScoreText>
                    {sectionData[0].damage && (
                        <S.ScoreText>
                            {i18n.t("damage")}: {calcScore("damage")}/{sectionData.length}
                        </S.ScoreText>
                    )}
                </S.Score>
            </S.Header>
            <S.Locations>
                {sectionData.map((data: PdaiDataInterface) => (
                    <Location key={data.id} data={data} visible={data.id == selectedLocation} />
                ))}
            </S.Locations>
        </S.Container>
    )
}
