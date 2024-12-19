import React from 'react';

type CardProps = {
    index: number,
    icon: string
}

const Card: React.FC<CardProps> = ({ index, icon }) => {
    return (
        <div key={index} style={styles.card}>
            <div style={styles.icon}>{icon}</div>
        </div >
    );
};

const styles: {
    card: React.CSSProperties;
    icon: React.CSSProperties;
} = {
    card: {
        backgroundColor: "lightblue",
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