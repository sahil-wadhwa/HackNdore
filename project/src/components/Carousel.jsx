import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  display:flex;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.5s ease-in-out;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
  margin-top:6vh;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const InfiniteCarousel = () => {
    const pics=["pic1","pic2","pic3","pic4","pic5"];
    const titles=["Health","Agriculture","Horticulture","Education","Election Commission"]
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1' },
    { id: 2, text: 'Card 2' },
    { id: 3, text: 'Card 3' },
    { id: 4, text: 'Card 4' },
    { id: 5, text: 'Card 5' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [cards.length]);

  return (
    <div className='w-screen h-full bg-gray-100 flex flex-row items-center'>
        <CarouselContainer>
    <CarouselWrapper
      style={{
        transform: `translateX(${currentIndex * -100}px)`,
        width: `${cards.length * 420}px`, // add width to wrapper
      }}
    >
      {cards.map((card, index) => (
            <Card className='flex flex-col gap-5 bg-gray-100 hover:scale-110 duration-500' key={card.id}>
                <img className='relative' src={require(`../assets/${pics[index]}.jpg`)} height={500} width={200}></img>
                {titles[index]}
            </Card>
        
      ))}
    </CarouselWrapper>

  </CarouselContainer>
    </div>
    
  );
};

export default InfiniteCarousel;