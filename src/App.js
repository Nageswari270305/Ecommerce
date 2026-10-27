import { useState, useEffect } from 'react';
import './App.css';
import ProductPage from './components/ProductPage/index';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Theme from '../src/components/ProductPage/appTheme'

function App() {

  const [theme, setTheme] = useState (()=>{
    return localStorage.getItem("Theme") || 'light';
  });
  
  useEffect (()=>{
    localStorage.setItem("Theme", theme)
  },[theme]);

  return (
  <Provider store={store}>
    <Theme.Provider value={{theme, setTheme}}>
  <ProductPage />
    </Theme.Provider>
      </Provider>
  );
}

export default App;
