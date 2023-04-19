export const Palette = {
    HeaderColor: "#68052B",
    ButtonColor: "#CB1258",

    NavigationColor: "#CFC7C9",
    BackColorApp: "#F3EDED",

    BackColorA: "#E6D9DB",
    BackColorB: "#E1AAB6",
    BackColorC: "#E3C9CD",
}

export const Shadow = (
    color: string = "#000B",
    offset: string = "3px 3px",
    elevation: string = "3",
    radius: string = "3px"
) => `
    shadow-color: ${color};
    shadow-offset: ${offset};
    shadow-radius: ${radius};
    elevation: ${elevation};
`

export const TextShadow = (color: string = "#000B", offset: string = "1px 1px", radius: string = "5px") => `
    text-shadow-color: ${color};
    text-shadow-offset: ${offset};
    text-shadow-radius: ${radius};
`
