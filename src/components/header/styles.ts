import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import styled from "styled-components"

import { Palette, TextShadow } from "../../common/palette"

export const Container = styled(View)`
    background-color: ${Palette.NavigationColor};
    padding-top: 20px;
`

export const Header = styled(SafeAreaView)`
    flex-direction: row;
    justify-content: flex-end;
    height: 40px;
    padding-horizontal: 10px;
`

export const HeaderTitle = styled(View)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
`

export const Title = styled(Text)`
    color: ${Palette.HeaderColor};
    font-size: 20px;
    font-variant: small-caps;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
`

export const Button = styled(TouchableOpacity)`
    justify-content: center;
    padding-horizontal: 3px;
`

export const ButtonText = styled(Text)`
    color: ${Palette.ButtonColor};
    font-weight: 600;
    ${TextShadow("#0006", "1px 1px", "6px")}
`
