import React, { useEffect } from 'react';
import './DogCard.scss';
import { useNavigate } from 'react-router-dom';
import { IDogData } from '../../types/DogsTypes';

export interface DogCardProps {
  imageSrc: string;
}

const selectedBorder = {
  selected: '4px solid #42b883',
  none: '4px solid #212121',
};

export default function DogCard({ dogCardProps, selectDog, selectedDog }:
  { dogCardProps: IDogData, selectDog: any, selectedDog: IDogData }) {
  const navigate = useNavigate();
  const onSelectDog = () => {
    selectDog(dogCardProps.id);
    localStorage.setItem('selectedDog', dogCardProps.id.toString());
  };
  const onOrderButton = () => {
    navigate(`volkodav/${dogCardProps.id}`);
  };

  useEffect(() => {
    const dogFromLocalStorage = localStorage.getItem('selectedDog');
    if (dogFromLocalStorage) {
      selectDog(+dogFromLocalStorage);
    }
  }, []);

  return (
    <div
      className="dog-card"
      onClick={onSelectDog}
      style={{
        border: dogCardProps.id === selectedDog.id
          ? selectedBorder.selected
          : selectedBorder.none,
      }}
    >
      <div className="dog-card__image">
        <img
          className="dog-card__image_source"
          src={dogCardProps.image}
          alt=""
          width={250}
          loading="lazy"
        />
      </div>
      <div className="dog-card__footer">
        <h1 className="dog-card__title">
          ID:
          {dogCardProps.id}
        </h1>
        {
         (selectedDog.id === 0 || selectedDog.id > 0) && (selectedDog.id === dogCardProps.id) ? (
           <button
             className="dog-card__footer_order-button"
             onClick={onOrderButton}
             type="button"
           >
             Забрать домой
           </button>
         )
           : (
             <button
               className="dog-card__footer_button-disabled"
               type="button"
             >
               Выберите волкодава
             </button>
           )
        }

      </div>

    </div>
  );
}
