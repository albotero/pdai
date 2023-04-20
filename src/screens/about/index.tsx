import { Linking } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"

import i18n, { Rtl } from "../../common/localization"
import * as Svg from "../../common/svg"
import * as S from "./styles"

type Social = {
    network: string
    user: string
    displayName?: string
}

interface ThankProps {
    id: string
    title: string
    description: string
    social?: Social[]
}

const svgIcon = (id: string) => {
    const width: number = 17,
        height: number = width

    switch (id) {
        case "dev":
            return <Svg.Dev width={65} height={45} />
        case "facebook":
            return <Svg.Facebook width={width} height={height} />
        case "instagram":
            return <Svg.Instagram width={width} height={height} />
        case "twitter":
            return <Svg.Twitter width={width} height={height} />
        case "udea":
            return <Svg.Udea width={200} height={250} />
    }
}

const socialLink = (network: string, user: string): string => {
    if (network == "facebook") return `https://www.facebook.com/${user}`
    return `https://www.${network}.com/${user.substring(1)}`
}

function Thank({ id, title, description, social }: ThankProps): JSX.Element {
    return (
        <S.Grid
            style={{
                flexDirection: Rtl() ? "row-reverse" : "row",
            }}
        >
            {svgIcon(id)}
            <S.Data>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
                {social &&
                    social.map((s) => (
                        <S.Social
                            key={s.user + s.network}
                            onPress={() =>
                                Linking.openURL(socialLink(s.network, s.user))
                                    .then(() => {})
                                    .catch((reason) => {
                                        console.log("ERROR =>", reason)
                                    })
                            }
                            style={{
                                alignSelf: Rtl() ? "flex-end" : "flex-start",
                                flexDirection: Rtl() ? "row-reverse" : "row",
                            }}
                        >
                            {svgIcon(s.network)}
                            <S.User>{s.displayName || s.user}</S.User>
                        </S.Social>
                    ))}
            </S.Data>
        </S.Grid>
    )
}

export default function About(): JSX.Element {
    return (
        <S.Container>
            <Animated.View entering={FadeIn.duration(2000)} style={{ flex: 1 }}>
                <S.Scroll>
                    <Thank id="udea" title={i18n.t("udea")} description={i18n.t("udeaFacMed")} />
                    <S.Separator />
                    <Thank
                        id="dev"
                        title={i18n.t("appDev")}
                        description="Alejandro Botero Fernández"
                        social={[
                            { network: "twitter", user: "@botdev92" },
                            //{ network: "facebook", user: "botdev92", displayName: "Alejandro Botero" },
                            //{ network: "instagram", user: "@botdev92" },
                        ]}
                    />
                </S.Scroll>
            </Animated.View>
        </S.Container>
    )
}
