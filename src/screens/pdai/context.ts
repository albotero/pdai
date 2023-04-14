export interface PdaiData {
    text: string
    value: number
}

export const skinAct: PdaiData[] = [
    { text: "absent", value: 0 },
    { text: "skinActivity1", value: 1 },
    { text: "skinActivity2", value: 2 },
    { text: "skinActivity3", value: 3 },
    { text: "skinActivity5", value: 5 },
    { text: "skinActivity10", value: 10 },
]

export const scalpAct: PdaiData[] = [
    { text: "absent", value: 0 },
    { text: "scalpActivity1", value: 1 },
    { text: "scalpActivity2", value: 2 },
    { text: "scalpActivity3", value: 3 },
    { text: "scalpActivity4", value: 4 },
    { text: "scalpActivity10", value: 10 },
]

export const mucousMembraneAct: PdaiData[] = [
    { text: "absent", value: 0 },
    { text: "mucousActivity1", value: 1 },
    { text: "mucousActivity2", value: 2 },
    { text: "mucousActivity5", value: 5 },
    { text: "mucousActivity10", value: 10 },
]

export const dam: PdaiData[] = [
    { text: "absent", value: 0 },
    { text: "present", value: 1 },
]

export interface PdaiDataInterface {
    id: number
    section: string
    location: string
    activity: PdaiData[]
    selAct: number
    damage?: PdaiData[]
    selDam?: number
}

export type PdaiContextType = {
    pdaiData: PdaiDataInterface[]
    updatePdaiData: (data: PdaiDataInterface) => void
}

export const PdaiSections: PdaiDataInterface[] = [
    { id: 1, section: "skin", location: "ears", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 2, section: "skin", location: "nose", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 3, section: "skin", location: "restOfFace", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 4, section: "skin", location: "neck", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 5, section: "skin", location: "chest", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 6, section: "skin", location: "abdomen", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 7, section: "skin", location: "backButtocks", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 8, section: "skin", location: "arms", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 9, section: "skin", location: "hands", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 10, section: "skin", location: "legs", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 11, section: "skin", location: "feet", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 12, section: "skin", location: "genitals", activity: skinAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 13, section: "scalp", location: "totalScalp", activity: scalpAct, selAct: 0, damage: dam, selDam: 0 },
    { id: 14, section: "mucousMembrane", location: "eyes", activity: mucousMembraneAct, selAct: 0 },
    { id: 15, section: "mucousMembrane", location: "nose", activity: mucousMembraneAct, selAct: 0 },
    { id: 16, section: "mucousMembrane", location: "buccalMucosa", activity: mucousMembraneAct, selAct: 0 },
    { id: 17, section: "mucousMembrane", location: "hardPalate", activity: mucousMembraneAct, selAct: 0 },
    { id: 18, section: "mucousMembrane", location: "softPalate", activity: mucousMembraneAct, selAct: 0 },
    { id: 19, section: "mucousMembrane", location: "upperGingiva", activity: mucousMembraneAct, selAct: 0 },
    { id: 20, section: "mucousMembrane", location: "lowerGingiva", activity: mucousMembraneAct, selAct: 0 },
    { id: 21, section: "mucousMembrane", location: "tongue", activity: mucousMembraneAct, selAct: 0 },
    { id: 22, section: "mucousMembrane", location: "floorOfMouth", activity: mucousMembraneAct, selAct: 0 },
    { id: 23, section: "mucousMembrane", location: "labialMucosa", activity: mucousMembraneAct, selAct: 0 },
    { id: 24, section: "mucousMembrane", location: "posteriorPharinx", activity: mucousMembraneAct, selAct: 0 },
    { id: 25, section: "mucousMembrane", location: "anogenital", activity: mucousMembraneAct, selAct: 0 },
]

export const SelectedLocations: Record<string, number | null> = {
    skin: null,
    scalp: null,
    mucousMembrane: null,
}
