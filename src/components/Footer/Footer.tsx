import React from 'react';
import './Footer.scss';
import { connect } from 'react-redux';

function Footer({ dogsReducer }:any) {
  return (
    <div className="footer">
      <h3>React-Redux-App</h3>
      {
        (dogsReducer.selected.id === 0 || dogsReducer.selected.id > 0) && (
        <h3 className="footer__selected-text">
          Волкодав ID:
          {' '}
          {dogsReducer.selected.id}
        </h3>
        )
      }
      <h4>2023 г</h4>
    </div>
  );
}

// const mapDispatchToProps = (dispatch: any) => ({
//   getAllDogs: () => dispatch(getDogsFromApi()),
//   selectDog: (id: any) => dispatch(setSelectedDog(id)),
// });

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(Footer);
