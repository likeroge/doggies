import React from 'react';
import './Modal.scss';
import { connect } from 'react-redux';
import { setModalVisible } from '../../store/actionCreators';

function DogPageModal({ uiReducer, setModalState }:any) {
  const onButtonHandler = () => {
    setModalState(false);
  };

  if (uiReducer.modalVisible) {
    if (uiReducer.modalVisible) {
      return (
        <div className="modal-wrapper">
          <div className="modal">
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
