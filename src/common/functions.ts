export function FirstLetter(text: string): string {
    return text.charAt(0)
}

export function CapitalizeSentence(text: string): string {
    return FirstLetter(text).toUpperCase() + text.slice(1).toLowerCase()
}
