import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import classes from './Orders.css';

const orders = props => {
  const [modalShown, setModalShown] = useState(true)

  useEffect(() => {
    props.onFetchOrders(props.token, props.userId);
  }, []);

  const handleModal = () => {
    setModalShown(false);
  };

  let reactions = [require('../../assets/images/reaction0.jpg'), 
                  require('../../assets/images/reaction1.jpg'),
                  require('../../assets/images/reaction2.jpg'), 
                  require('../../assets/images/reaction3.jpg'),
                  require('../../assets/images/reaction4.jpg'), 
                  require('../../assets/images/reaction5.jpg'),
                  require('../../assets/images/reaction6.jpg'), 
                  require('../../assets/images/reaction7.jpg'),
                  require('../../assets/images/reaction8.jpg'), 
                  require('../../assets/images/reaction9.jpg'),
                  require('../../assets/images/reaction10.jpg'), 
                  require('../../assets/images/reaction11.jpg'),
                  require('../../assets/images/reaction12.jpg'), 
                  require('../../assets/images/reaction13.jpg'),
                  require('../../assets/images/reaction14.jpg'), 
                  require('../../assets/images/reaction15.jpg'),
                  require('../../assets/images/reaction16.jpg'), 
                  require('../../assets/images/reaction17.jpg'), 
                  require('../../assets/images/reaction18.jpg'),
                  require('../../assets/images/reaction19.jpg'), 
                  require('../../assets/images/reaction20.jpg'),
                  require('../../assets/images/reaction21.jpg'), 
                  require('../../assets/images/reaction22.jpg'),
                  require('../../assets/images/reaction23.jpg'), 
                  require('../../assets/images/reaction24.jpg'),
                  require('../../assets/images/reaction25.jpg'), 
                  require('../../assets/images/reaction26.jpg'),
                  require('../../assets/images/reaction27.jpg'), 
                  require('../../assets/images/reaction28.jpg')];

  let orders = <Spinner />;
  let totalScores = 0;
  let modalReaction = null;
  if (!props.loading) {
    props.orders.map(order => ( totalScores += order.price));
    orders = props.orders.map(order => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
    modalReaction = <Modal show={modalShown} modalClosed={handleModal}>
                      <p className={classes.Image}>
                        <img src={reactions[14+Math.floor(( (totalScores/100 <= 1 && totalScores/100 >= -1) ? totalScores/100 : 1) * (reactions.length - 1) / 2)]} style={{width: "100%", height: "100%"}} alt="Reakcija lidera" />
                      </p>
                    </Modal>;
  }
return (
  <div>
    <p className={classes.Label}>Ukupno stranačkih bodova: <strong>{Number.parseFloat(totalScores).toFixed( 2 )}</strong></p>
    {orders}
    {modalReaction}
  </div>);

};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(orders, axios));
