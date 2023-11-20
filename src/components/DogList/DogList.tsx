import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IDogData } from '../../types/DogsTypes';
import DogCard from '../DogCard/DogCard';
import { getDogsFromApi, setSelectedDog } from '../../store/actionCreators';
import './DogList.scss';

function DogList({ dogsReducer, getAllDogs, selectDog }: any) {
  useEffect(() => {
    getAllDogs();
  }, []);
  return (
    <div className="dog-list">
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
}

const mapDispatchToProps = (dispatch: any) => ({
  // add: () => dispatch({ type: 'ADD_TODO' }),
  // getPosts: () => dispatch(getTodosFromUrl()),
  getAllDogs: () => dispatch(getDogsFromApi()),
  selectDog: (id: any) => dispatch(setSelectedDog(id)),
});

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
