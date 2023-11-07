import InputBase from '@mui/material/InputBase';
import { alpha, createTheme, makeStyles, styled } from '@mui/material/styles';


export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const themeDark = createTheme({
  palette: {
    primary: {
      main: '#212529', // Cor vermelha como exemplo, substitua pelo seu código de cor
    },
  },
});

export const box = {
  position: 'absolute' as 'absolute',
  maxWidth: '90vw',
  width: '600px',
  height: 'min-content',
  backdropFilter: 'blur(10px)',
  color: 'white',
  border: '1px solid #ffffff3b',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  left: '50%',
  borderRadius: '10px',
  boxShadow: 24,
  p: 2,
};

export const containerBox = {
  position: 'relative',
  width: '100%',
  color: 'white',
  borderRadius: '10px',
  p: 4,
};
export const modals = {

};

export const vs = {
  width: '100%',
  height: 'auto',
};

export const borderBox1 = {
  borderTop: '1px solid orange',
  borderLeft: '1px solid orange',
  borderRight: '1px solid orange',
}
export const borderBox2 = {
  borderBottom: '1px solid orange',
  borderLeft: '1px solid orange',
  borderRight: '1px solid orange',
}

export const bR1 = {
  borderRadius: '10px 10px 0px 0px',
}
export const bR2 = {
  borderRadius: '0px 0px 10px 10px',
}

export const bgS = {
  maxHeight: '300px',
  width: '100%',
  maxWidth: '300px',  
  height: 'auto',
  transition: '.5s',
  '&:hover': {
    boxShadow: '0px 0px 10px -2px white',
    transition: '.5s',
    cursor: 'pointer'
  },
  '@media (max-width: 840px)': {
    maxWidth: '200px',
  },
  '@media (max-width: 570px)': {
    maxWidth: '150px',
  },
};

export const infoHero = {
  maxWidth: '300px',  
  width: 'auto',
  color: 'white',
  p: 0.5,
  '@media (max-width: 840px)': {
    maxWidth: '200px',
  },
  '@media (max-width: 570px)': {
    maxWidth: '150px',
    fontSize: '1em'
  },
 
};

export const Bebas = {
    fontFamily: 'Bebas Neue , sans-serif',
  }