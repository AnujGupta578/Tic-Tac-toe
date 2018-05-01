import { EnthusiasmAction } from './actions';
import { StoreState, SquareValue, ClickHistory } from './types';
import { changeState, Clicked_Move, GO_TO_START_GAME } from './constants';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case GO_TO_START_GAME:
            return {
                ...state,
                square: state.square.map((square => square.value !== '' ? { ...square, value: '' } : square))
            }

        case changeState:
            let playerClick = false;
            state.square.map((sq) => {
                if (sq.id === action.id) {
                    if (sq.value !== "") {
                        playerClick = true;
                    }
                }
            });

            if (playerClick) {
                return { ...state };
            }

            return {
                ...state,
                defaultValue: setNewValue(state.defaultValue),
                history: [...state.history, {
                    squareId: action.id,
                    value: state.defaultValue
                }],
                square: state.square.map((square, index) => square.id === action.id ? {
                    ...square, value: state.defaultValue
                } : square)
            }
        case Clicked_Move:
            return {
                ...state,
                square: getMoveHistorySquaer(state.square, state.history, action.id)
            }
        default:
            return { ...state };
    }
}

const setNewValue = (lastTurn: string): string => {
    console.log(lastTurn);
    let newlastTurn = null;
    lastTurn === "X" ? newlastTurn = "O" : newlastTurn = "X"
    return newlastTurn;
}

const getMoveHistorySquaer = (squares: SquareValue[], history: ClickHistory[], acId: number): SquareValue[] => {
    const newArr = Array<ClickHistory>();
    history.forEach((historyElement, index1) => {
        if (+acId >= index1) {
            newArr.push(historyElement);
        }
    });

    return squares.map((square => nullifyMe(square, newArr) ? { ...square, value: '' } : getValueFromHistory(square, history)));
}

const nullifyMe = (square: SquareValue, newArr: ClickHistory[]): boolean => {
    let response = true;

    newArr.forEach((historyMove) => {
        if (historyMove.squareId === square.id) {
            response = false;
        }
    });

    return response;
}

const getValueFromHistory = (square: SquareValue, newArr: ClickHistory[]): any => {
    let foundObj;

    foundObj = newArr.filter((historyMove) => {
        return historyMove.squareId === square.id;
    })[0];


    if (foundObj !== null && foundObj !== undefined) {
        square.value = foundObj.value;
        return square;
    }

    return square;
}