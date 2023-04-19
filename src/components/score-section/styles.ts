import { Text, View } from "react-native"
import styled from "styled-components"

import { Palette } from "../../common/palette"

export const Container = styled(View)`
    margin-vertical: 20px;
    flex: 1;
`

export const Header = styled(View)`
    background-color: ${Palette.HeaderColor};
    margin-horizontal: 5px;
    padding-horizontal: 10px;
    border-radius: 5px;
    flex: 1;
    align-items: center;
    height: 40px;
`

export const Title = styled(Text)`
    flex: 1;
    color: white;
    font-size: 18px;
    font-variant: small-caps;
    font-weight: bold;
    text-transform: capitalize;
`

export const ScoreText = styled(Text)`
    color: white;
    font-size: 12px;
    font-variant: small-caps;
    font-weight: bold;
`

export const Locations = styled(View)`
    background-color: ${Palette.BackColorA};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-horizontal: 8px;
    overflow: hidden;
    shadow-color: black;
    shadow-offset: 0 1px;
    shadow-opacity: 0.5;
    shadow-radius: 3px;
    elevation: 5;
`
