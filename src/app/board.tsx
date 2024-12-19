import React from 'react';
import Card from './card';

const Board = () => {
  return (
    <div style={styles.container}>
      <div style={styles.square}>
        <div style={styles.grid}>
          {generateCards()}
        </div>
      </div>
    </div>
  );
};

const generateCards = () => {
  const icons = [
    '🍎', '🍌', '🐱', '🌸', '🍕', '🎉', '⚽', '🎁',
    '🐱', '🍎', '🍌', '🍕', '🎁', '🌸', '🎉', '⚽'
  ];
  return icons.map((icon, index) => (
    < Card key={index} icon={icon} index={index} />
  )
  );
};

const styles: {
  container: React.CSSProperties;
  square: React.CSSProperties;
  grid: React.CSSProperties;

} = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  square: {
    width: '50vw',
    height: '50vw',
    backgroundColor: 'orange',
    position: 'relative',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '2%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height: '95%',
  }
};

export default Board;