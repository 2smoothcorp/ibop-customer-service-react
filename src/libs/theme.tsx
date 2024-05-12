/**
 *  Theme - MUI Theme Builder
 */

'use client'

import type { } from '@mui/x-data-grid/themeAugmentation';
import type { } from '@mui/x-date-pickers/themeAugmentation';

import { createTheme } from "@mui/material";

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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // '& .MuiFormHelperText-root': {
          //   position: 'absolute',
          //   bottom: '-30px',
          //   fontSize: '16px',
          // },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#D1D5DB',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1F346B',
            },
          },
        }

      },
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        fullWidth: true,
        InputProps: {
          sx: {
            backgroundColor: '#fff',
            fontSize: '18px',
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-inputRoot': {
            backgroundColor: '#fff',
            height: '40px',
            '& .MuiAutocomplete-input': {
              padding: '0 10px',
              fontSize: '18px'
            },
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '18px'
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          height: '35px',
          color: '#43AD9E',
          fontWeight: 700,
        },
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          // border: '1px solid #D1D5DB',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          '& .MuiDataGrid-columnsContainer': {
            backgroundColor: '#F9FAFB',
            borderBottom: '1px solid #D1D5DB',
            '& .MuiDataGrid-columnSeparator': {
              display: 'none'
            }
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: 'rgba(185,185,185, 0.15)',

          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: '#000',
            fontSize: '18px',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-cell': {
            fontSize: '18px',
          },
          '& .MuiTablePagination-selectLabel': {
            fontSize: '18px',
          },
          '& .MuiInputBase-input': {
            fontSize: '18px',
          },
          '& .MuiTablePagination-displayedRows': {
            fontSize: '18px',
          },
          '& .MuiPaginationItem-page': {
            fontSize: '18px',
          }
        },
      }
    },
    MuiDatePicker: {
      defaultProps: {
        format: 'DD/MM/YYYY',
        slotProps: {
          textField: {
            size: 'small',
            color: 'primary',
            fullWidth: true,
            InputProps: {
              sx: {
                backgroundColor: '#fff',
                fontSize: '18px',
              }
            },

          },
          openPickerButton: {
            color: 'primary',
          }
        }
      }
    }
  }
});