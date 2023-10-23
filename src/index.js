import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Context/Context';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AnimCursor from './AnimCursor.js'
import { StateProvider } from './components/StateProvider.jsx';
import reducer, { initialState } from './src/Components/components/reducer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <AnimCursor/>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
