import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { IDogData } from '../../types/DogsTypes';
import DogCard from '../DogCard/DogCard';
import { getDogsFromApi, setSelectedDog } from '../../store/actionCreators';
import './DogList.scss';
import useViewSize from '../../hooks/useViewSize';

const DogList = memo(({ dogsReducer, getAllDogs, selectDog }: any) => {
  useEffect(() => {
    getAllDogs();
  }, []);

  const size = useViewSize();

  return (
    <div className="dog-list">
      {/* h1 появится только на экранe с шириной < 376 */}
      {
        size < 376 && (<h1>Ваш волкодав:</h1>)
      }
      {dogsReducer.dogs
          && dogsReducer.dogs.length > 0
          && dogsReducer.dogs
            .map((dog: IDogData) => (
              <DogCard
                selectDog={selectDog}
                key={dog.id}
                dogCardProps={dog}
                selectedDog={dogsReducer.selected}
              />
            ))}
    </div>
  );
});

const mapDispatchToProps = (dispatch: any) => ({
  getAllDogs: () => dispatch(getDogsFromApi()),
  selectDog: (id: any) => dispatch(setSelectedDog(id)),
});

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
