export interface SquareValue {
    id?: number,
    value?: string,
    isRequired?: boolean
}

export interface ClickHistory {
    squareId?: number,
    value?: string,
    index?: number
}
export interface Suggestions {
    label?: string
}

export interface StoreState {
    defaultValue: string;
    history: ClickHistory[];
    square: SquareValue[];
    suggestionsList: Suggestions[];
}

export interface Props {
    value?: string;
    squareCount?: number[];
    square?: SquareValue[];
    history?: ClickHistory[];
    suggestionsList?: Suggestions[];
    goToMove?: () => void;
    onClick?: () => void;
    goToSatrtgame?: () => void;
}