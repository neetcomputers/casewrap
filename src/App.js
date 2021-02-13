import React from 'react';
import Design from './features/design/Design';
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box'

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App" bgcolor="#24282B">
        <Design />
      </Box>
    </ThemeProvider>
  );
}

export default App;
