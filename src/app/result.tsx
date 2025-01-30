'use client';
import React from 'react';

type ResultProps = {
    player: number;
    result: [number, number];
    width: number;
}

const Result: React.FC<ResultProps> = ({ player, result, width }) => {
    const [player1Score, player2Score] = result;

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
            width: `${width}px`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '5vh',
        }
    }

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

export default Result;