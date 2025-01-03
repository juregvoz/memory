'use client';
import React from 'react';

type ResultProps = {
    player: number;
    result: [number, number];
}

const Result: React.FC<ResultProps> = ({ player, result }) => {
    const [player1Score, player2Score] = result;

    return (
        <div style={styles.bar}>
            <div style={styles.result}>
                <h2 style={{ ...styles.bar, color: ((player === 1) ? 'red' : 'black') }}>Player 1</h2>
                <h2>{player1Score} : {player2Score}</h2>
                <h2 style={{ ...styles.bar, color: ((player === 2) ? 'red' : 'black') }}>Player 2</h2>
            </div>
        </div >
    )
}

const styles: {
    bar: React.CSSProperties;
    result: React.CSSProperties;
} = {
    bar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',


    },
    result: {
        boxSizing: 'border-box',
        border: '7px solid orange',
        padding: '10px',
        maxWidth: '90vh',
        width: '45vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '5vh',
    }
}

export default Result;