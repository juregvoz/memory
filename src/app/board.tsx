'use client';
import React, { useState } from 'react';
import Card from './card';

interface CardData {
  id: number;
  icon: string;
  flipped: boolean;
  matched: boolean;
}

type BoardProps = {
  player: number;
  setPlayer: React.Dispatch<React.SetStateAction<number>>;
  result: [number, number];
  setResult: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const Board: React.FC<BoardProps> = ({ player, setPlayer, result, setResult }) => {

  const generateCards = (): CardData[] => {
    const icons = [
      '🍎', '🍌', '🐱', '🌸', '🍕', '🎉', '⚽', '🎁'
    ];
    const shuffleIcons = [...icons, ...icons].sort(() => Math.random() - 0.5);
    return shuffleIcons.map((icon, index) => ({
      id: index,
      icon: icon,
      flipped: false,
      matched: false
    }));
  };

  const [cards, setCards] = useState<CardData[]>(generateCards());
  const [openCards, setOpenCards] = useState<number[]>([]);

  const handleCardClick = (id: number): void => {
    if (openCards.length === 2 || cards[id].flipped || cards[id].matched) {
      return;
    }

    const newCards = [...cards];
    newCards[id].flipped = true;
    const newOpenCards = [...openCards, id];

    if (newOpenCards.length === 2) {
      if (newCards[newOpenCards[0]].icon === newCards[newOpenCards[1]].icon) {
        setTimeout(() => {
          newCards[newOpenCards[0]].matched = true;
          newCards[newOpenCards[1]].matched = true;
          const newResult: [number, number] = [...result];
          newResult[player - 1] += 1;
          setResult(newResult);
          setOpenCards([]);
          return;
        }, 1000);
      } else {
        setTimeout(() => {
          newCards[newOpenCards[0]].flipped = false;
          newCards[newOpenCards[1]].flipped = false;
          setCards(newCards);
          setOpenCards([]);
          setPlayer((player === 1) ? 2 : 1)
        }, 1000);
      }
    }

    setCards(newCards);
    setOpenCards(newOpenCards);
  }

  return (
    <div style={styles.container}>
      <div style={styles.square}>
        <div style={styles.grid}>
          {cards.map((card) => (
            < Card key={card.id} icon={card.icon}
              flipped={card.flipped}
              matched={card.matched}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
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
    height: '90vh',
  },
  square: {
    maxHeight: '90vh',
    maxWidth: '90vh',
    width: '45vw',
    height: '45vw',
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