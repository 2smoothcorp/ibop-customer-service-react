/**
 *  Theme - MUI Theme Builder
 */

'use client'

import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'light',
    common: { black: '#000000', white: '#FFFFFF' },
    contrastThreshold: 3,
    divider: 'rgba(0, 0, 0, 0.25)',

    primary: {
      main: '#11285C',
      light: '#6D96E4',
      dark: '#0A2154',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#43AD9E',
      light: '#75D3C3',
      dark: '#2F9D8F',
      contrastText: '#000000'
    },
    info: {
      main: '#0EA5E9',
      light: '#38BCF8',
      dark: '#028AC7',
      contrastText: '#000000'
    },
    success: {
      main: '#10B981',
      light: '#34D39E',
      dark: '#059666',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#F59E0B',
      light: '#FBAB24',
      dark: '#D98B06',
      contrastText: '#000000'
    },
    error: {
      main: '#EF4444',
      light: '#F87171',
      dark: '#DC2626',
      contrastText: '#FFFFFF'
    }
  },

  /** @ref https://stackoverflow.com/a/72078615 */
  typography: {
    fontFamily: `'DB Helvethaica', sans-serif`,
    // fontSize: 14,
    // htmlFontSize: 16
  },

  /** Custom Component Specific Theme here */
  // components: {}
});