import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import './view/styles/index.scss';

import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'


import { Provider } from 'react-redux';
import store from "./core/store"

toast.configure({
  autoClose : 1500,
  draggable: true,
  position:"top-right",
  hideProgressBar: false,
  newestOnTop : true,
  closeOnClick: true,
  pauseOnHover : true,
  rtl: false,
  theme: "colored"
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
