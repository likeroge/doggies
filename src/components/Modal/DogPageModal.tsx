import React, { useEffect, useState } from 'react';
import './Modal.scss';
import { connect } from 'react-redux';
import { setModalVisible } from '../../store/actionCreators';

function DogPageModal({ uiReducer, setModalState }:any) {
  const [username, setUsername] = useState<string>('');
  const onButtonHandler = () => {
    setModalState(false);
  };

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
      const name = JSON.parse(userFromLocalStorage);
      setUsername(name.username);
    }
  });

  if (uiReducer.modalVisible) {
    if (uiReducer.modalVisible) {
      return (
        <div className="modal-wrapper">
          <div className="modal">
            <h2>{username}</h2>
            <h1>С вами скоро свяжутся</h1>
            <button
              onClick={onButtonHandler}
              type="button"
            >
              Ok
            </button>
          </div>
        </div>
      );
    }
  } else {
    return '';
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setModalState: (value:boolean) => dispatch(setModalVisible(value)),
});
const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps, mapDispatchToProps)(DogPageModal);
