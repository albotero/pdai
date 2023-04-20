import { createContext, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack"
import styled from "styled-components"

import i18n, { GetLanguage, SetLanguage } from "@common/localization"
import { Palette, TextShadow } from "@common/palette"
import About from "@screens/about"
import Lang from "@screens/lang"
import Pdai from "@screens/pdai"
import Splash from "@screens/splash"

export type AppContextType = {
    changeLang?: (iso: string) => void
}

export const AppContext = createContext<AppContextType | null>(null)

export type RootStackParamList = {
    PDAI: undefined
    ChangeLang: undefined
    About: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App(): JSX.Element {
    const [reloadState, setReloadState] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const changeLang = (iso: string) => {
        i18n.changeLanguage(iso)
        SetLanguage(iso)
        setReloadState(!reloadState)
    }

    GetLanguage().then((iso: string | null) => i18n.language != iso && iso && changeLang(iso))

    if (isLoading) return <Splash setIsLoading={setIsLoading} />

    return (
        <AppContext.Provider value={{ changeLang: changeLang }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="PDAI">
                    <Stack.Screen
                        name="PDAI"
                        component={Pdai}
                        options={({ navigation }) => ({
                            ...Options("pdaiScore"),
                            ...PdaiHeaderButtons(navigation),
                        })}
                    />
                    <Stack.Screen name="ChangeLang" component={Lang} options={Options("selectLang")} />
                    <Stack.Screen name="About" component={About} options={Options("acknowledgments")} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    )
}

const Options = (titleKey: string): NativeStackNavigationOptions => ({
    headerStyle: {
        backgroundColor: Palette.NavigationColor,
    },
    headerBackTitleVisible: false,
    headerTitle: () => <S.HeaderTitle>{i18n.t(titleKey)}</S.HeaderTitle>,
    headerShadowVisible: true,
    headerTitleAlign: "center",
})

const PdaiHeaderButtons = (navigation: any): NativeStackNavigationOptions => {
    return {
        headerRight: () => (
            <S.HeaderButtonCont>
                <S.HeaderButton onPress={() => navigation.navigate("About")}>
                    <S.HeaderButtonText style={{ fontSize: 16 }}>{"\u{1F516}"}</S.HeaderButtonText>
                </S.HeaderButton>
                <S.HeaderButton onPress={() => navigation.navigate("ChangeLang")}>
                    <S.HeaderButtonText style={{ fontSize: 18 }}>{i18n.t("languageFlag")}</S.HeaderButtonText>
                </S.HeaderButton>
            </S.HeaderButtonCont>
        ),
    }
}

const S = {
    HeaderTitle: styled(Text)`
        color: ${Palette.HeaderColor};
        font-size: 20px;
        font-variant: small-caps;
        font-weight: 600;
        text-transform: capitalize;
    `,

    HeaderButtonCont: styled(View)`
        flex-direction: row;
    `,

    HeaderButton: styled(TouchableOpacity)`
        justify-content: center;
        padding-horizontal: 3px;
    `,

    HeaderButtonText: styled(Text)`
        color: ${Palette.ButtonColor};
        font-weight: 600;
        ${TextShadow("#0006", "1px 1px", "6px")}
    `,
}
