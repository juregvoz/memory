import React from 'react';

const Result = () => {
    return (
        <div style={styles.bar}>
            <div style={styles.result}>
                <h2>Player 1</h2>
                <h2>0 : 0</h2>
                <h2>Player 2</h2>
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