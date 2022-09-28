import { Route, Routes } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';

import { ThemeModeButton } from '../providers/ThemeMode.provider';
import MainPageContainer from './MainPage.container';
import VersionComponent from '../components/Version.component';

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ pt: 3 }}
    >
      {'Copyright © '}
      2018-{new Date().getFullYear()} YSTUty.
      <br />
      <VersionComponent />
    </Typography>
  );
};

const App = () => {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={5}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            [YSTUty] ЛК
          </Typography>
          <Typography sx={{ flex: 1 }}></Typography>
          <Divider orientation="vertical" flexItem />
          <FormControl sx={{ ml: 2 }}>
            <ThemeModeButton />
          </FormControl>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Routes>
          <Route path="/" element={<MainPageContainer />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
        <Copyright />
      </Container>
    </>
  );
};

export default App;
