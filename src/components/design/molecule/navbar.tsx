import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Search, SearchIconWrapper, themeDark, StyledInputBase } from '../../styles/style';
import { ThemeProvider } from '@mui/material/styles';

type SearchInput = {
  searchHero: string;
  onSearchHero: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const NavBar: React.FC<SearchInput> = ({ searchHero, onSearchHero }, props: SearchInput) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisar..."
            value={searchHero}
            onChange={onSearchHero}
            inputProps={{ 'aria-label': 'Pesquisar' }}
          />
        </Search>
      </MenuItem>
    </Menu>
  );
  return (
    <ThemeProvider theme={themeDark}>
      <AppBar position="fixed" enableColorOnDark>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            <Box component="img" 
             sx={{ width: '100px', height: 'auto'}}
            src="https://freepngimg.com/download/anime/120027-hero-academia-my-logo-free-clipart-hq.png"
            />
            MY HERO ACADEMIA
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                type="text"
                value={searchHero}
                onChange={onSearchHero}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </ThemeProvider>
  );
}
export default NavBar;