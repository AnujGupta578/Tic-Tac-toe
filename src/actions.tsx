import * as constants from './constants';

export interface ChangeToState {
    id: number;
    type: constants.changeState;
}

export interface GoToClickedMOve {
    id: number;
    type: constants.Clicked_Move;
}

export interface GoToSatrtgame {
    type: constants.GO_TO_START_GAME;
}

export type EnthusiasmAction = ChangeToState | GoToClickedMOve | GoToSatrtgame;

export function changeTicTacState(event: any): ChangeToState {
    return {
        id: +event.target.value,
        type: constants.changeState
    };
}

export function goToClickedMove(event: any): GoToClickedMOve {
    return {
        id: event.target.value,
        type: constants.Clicked_Move
    }
}

export function goToSatrtgame(): GoToSatrtgame {
    return {
        type: constants.GO_TO_START_GAME
    }
}