import { createTheme } from '@mui/material';
import { STYLE_VARIABLE } from '../constants/style-variable.ts';

export const themeConfig = createTheme({
  palette: {
    primary: {
      main: STYLE_VARIABLE.COLORS.PRIMARY.MAIN,
      dark: STYLE_VARIABLE.COLORS.PRIMARY.DARK,
      light: STYLE_VARIABLE.COLORS.PRIMARY.LIGHT,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 1,
          minWidth: 300,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: 2,
          ':hover': {
            boxshadow: 'none',
          },
        },
      },
    },
  },
});
