'use client';
import React from 'react';

type CardProps = {
    key: number,
    icon: string,
    flipped: boolean;
    matched: boolean;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ icon, flipped, matched, onClick }) => {
    return (
        <div onClick={onClick} style={
            { ...styles.card, backgroundColor: (matched ? 'orange' : 'lightblue') }}>
            {(flipped && !matched) && <div style={styles.icon}>{icon}</div>}
        </div >
    );
};

const styles: {
    card: React.CSSProperties;
    icon: React.CSSProperties;
} = {
    card: {
        cursor: "pointer",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 'calc(30% + 4vw)',
        maxWidth: '80%',
        maxHeight: '80%',
        textAlign: 'center',
        lineHeight: 0,
    },
}

export default Card;