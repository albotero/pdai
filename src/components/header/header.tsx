import * as S from "./styles"

interface HeaderProps {
    title: string
    buttons: JSX.Element[]
    style?: any
}
export default function Header({ title, buttons, style }: HeaderProps): JSX.Element {
    return (
        <S.Container>
            <S.Header style={style}>
                <S.HeaderTitle>
                    <S.Title>{title}</S.Title>
                </S.HeaderTitle>
                {buttons}
            </S.Header>
        </S.Container>
    )
}

interface ButtonProps {
    text: string
    textSize: number
    action: () => void
}

export function HeaderButton({ text, textSize, action }: ButtonProps): JSX.Element {
    return (
        <S.Button onPress={action}>
            <S.ButtonText style={{ fontSize: textSize }}>{text}</S.ButtonText>
        </S.Button>
    )
}
