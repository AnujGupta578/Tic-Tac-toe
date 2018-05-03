import * as actions from './actions';
import { StoreState } from './types';
import { connect, Dispatch } from 'react-redux';
import AppComponent from './hello';

export function mapStateToProps({ defaultValue, history = [], square = [], suggestionsList = [], tag, isWinner }: StoreState) {
    return {
        history,
        square,
        value: defaultValue,
        suggestionsList,
        title: tag,
        isWinner

    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onClick: (event: any) => dispatch(actions.changeTicTacState(event)),
        goToMove: (event: any) => dispatch(actions.goToClickedMove(event)),
        goToSatrtgame: () => dispatch(actions.goToSatrtgame())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
