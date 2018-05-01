import * as React from 'react';
import './App.css';
import { Props } from './types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Downshift from 'downshift';


export const renderInput = (inputProps: any) => {
    const { InputProps, classes, ref, ...other } = inputProps;
    return (
        <TextField
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}
export const renderSuggestion = ({ suggestion, index, itemProps, highlightedIndex, selectedItem }) => {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

    return (
        <MenuItem
            {...itemProps}
            key={suggestion.label}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {suggestion.label}
        </MenuItem>
    );
}

export const getSuggestions = (inputValue: any, suggestionsList = []) => {
    let count = 0;
    return suggestionsList.filter(suggestions => {
        const keep =
            (!inputValue || suggestions.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
            count < 5;

        if (keep) {
            count += 1;
        }

        return keep;
    });
}
export const MoveButton = ({ history = [], goToSatrtgame, goToMove }: Props) => {
    return (

        <div>
            <button className="custom-button" value={0} onClick={goToSatrtgame}>Go To Start Game</button>
            {history.map((squa, index) => <button className="custom-button" key={squa.squareId} value={index} onClick={goToMove}>Move to #{index + 1}</button>)}
        </div>
    )
}

export const Square = ({ onClick, square = [] }: Props) => {
    return (
        <div>
            {
                square.map((sq) =>
                    <button className="square" key={sq.id} onClick={onClick} value={sq.id} name={sq.value}> {sq.value} </button>
                )
            }

        </div>
    );
};

const AppComponent = ({ value, onClick, history = [], square = [], goToMove, goToSatrtgame, suggestionsList = [] }: Props) => {
    console.log(suggestionsList);
    return (
        <div className="box-margin">
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Title
                        </Typography>
                        <Button className="login-button" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div className="player-padding">
                <p>Next Player-&nbsp;{value}</p>
            </div>
            <div className="board-row ">
                <Square onClick={onClick} square={square.filter((sq: any) => sq.id < 4)} />
            </div>
            <div className="board-row">
                <Square onClick={onClick} square={square.filter((sq: any) => sq.id >= 4 && sq.id < 7)} />
            </div>
            <div className="board-row">
                <Square onClick={onClick} square={square.filter((sq: any) => sq.id >= 7 && sq.id <= 9)} />
            </div>
            <div>
                <MoveButton history={history} goToMove={goToMove} goToSatrtgame={goToSatrtgame} />
            </div>
            <Downshift inputValue={inputValue} onChange={this.handleChange} selectedItem={selectedItem}>
                {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
                    <div>
                        {renderInput({
                            fullWidth: true,
                            InputProps: getInputProps({
                                placeholder: 'Search a country (start with a)',
                                id: 'integration-downshift-simple',
                            }),
                        })}
                        {isOpen ? (
                            <Paper square>
                                {getSuggestions({ inputValue, suggestionsList }).map((suggestion, index) =>
                                    renderSuggestion(
                                        {
                                            suggestion,
                                            index,
                                            itemProps: getItemProps({ item: suggestion }),
                                            highlightedIndex,
                                            selectedItem,
                                        }),
                                )}
                            </Paper>
                        ) : null}
                    </div>
                )}
            </Downshift >
        </div>
    );
};

export default AppComponent;