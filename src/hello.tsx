import * as React from 'react';
import './App.css';
import { Props } from './types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const MoveButton = ({ history = [], goToSatrtgame, goToMove }: Props) => {
    return (

        <div>
            <button className="custom-button" onClick={goToSatrtgame}>Go To Start Game</button>
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

const AppComponent = ({ value, onClick, history = [], square = [], goToMove, goToSatrtgame, suggestionsList = [], title, isWinner }: Props) => {
    console.log(history, square,isWinner);
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
                <p>{isWinner ? "Winner" : title}-&nbsp;{value}</p>
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
        </div>
    );
};

export default AppComponent;