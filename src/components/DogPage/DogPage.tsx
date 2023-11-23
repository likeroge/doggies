import React, { BaseSyntheticEvent } from 'react';
import './DogPage.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserState } from '../../types/UserTypes';
import { setModalVisible, setUserData } from '../../store/actionCreators';

type Inputs = {
  username: string,
  phone: string,
};

function DogPage({
  dogsReducer, setUserState, setModalState,
}:any) {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (
    data:Inputs,
    e:BaseSyntheticEvent<object, any, any> | undefined,
  ) => {
    setUserState({
      username: data.username,
      phone: data.phone,
      selectedDogId: dogsReducer.selected.id,
    });
    localStorage.setItem('user', JSON.stringify({
      username: data.username,
      phone: data.phone,
      selectedDogId: dogsReducer.selected.id,
    }));
    setModalState(true);
    e?.target.reset();
  };

  return (
    <div className="dog-page-wrapper">
      <div className="dog-page">
        <div>
          <img className="dog-page__image" src={dogsReducer.selected.image} alt="" />
        </div>
        <form className="dog-page__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">
            Ваше имя
            <input defaultValue="" type="text" {...register('username', { required: true })} id="username" />
            {errors.username && <span>Введите ваше имя</span>}
          </label>
          <label htmlFor="phone">
            Ваш телефон
            <input {...register('phone', { required: true })} id="phone" type="tel" />
            {errors.phone && <span>Введите номер телефона</span>}
          </label>
          <button className="dog-page__form_button" type="submit">Подтвердить</button>
          <button
            className="home-link"
            type="button"
          >
            <Link to="/">На главную</Link>
          </button>
        </form>
      </div>

    </div>
  );
}
const mapDispatchToProps = (dispatch: any) => ({
  setUserState: (userData:IUserState) => dispatch(setUserData(userData)),
  setModalState: (value:boolean) => dispatch(setModalVisible(value)),

});
const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps, mapDispatchToProps)(DogPage);
