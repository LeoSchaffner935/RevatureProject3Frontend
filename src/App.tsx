import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { CartContext } from './context/cart.context';
import ProductItem from './models/Product';
import { AppRoutes } from './router/AppRoutes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DarkModeSwitcher from './components/dark-mode-switcher/DarkModeSwitcher'; // KHENAN TERRY: Dark Mode Switcher
import { GlobalStyles } from "@mui/material";

function App() {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const value = { cart, setCart };

  //** EDIT START: Dark Mode Switcher **//
  const lightMode = createTheme({
    palette: {
      primary: {
        main: '#474C55',
      },
      secondary: {
        main:'#bbbbbb'
      },
      text: {
        primary: '#000000'
      },
      background: {
        default: '#ffffff'
      }
    }
  });

  const darkMode = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main:'#000000'
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff'
      },
      background: {
        default: '#474C55',
        paper: '#474C55'
      }
    }
  });

  const colorMode = sessionStorage.getItem('colorMode');
  let theme = colorMode != 'lightMode' ? lightMode : darkMode;
 //** EDIT END: Dark Mode Switcher (also adds ThemeProvider, GlobalStyles, and empty tags to the return, but I can't comment inside there.) **//
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles ={{ body:{backgroundColor:theme.palette.background.default}}} />
      <>
      <DarkModeSwitcher />
      <CartContext.Provider value={value}>
        <Router>
          <AppRoutes></AppRoutes>
        </Router>
      </CartContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
