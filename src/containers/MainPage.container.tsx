import { FormattedMessage } from 'react-intl';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MainPage = () => {
  return (
    <>
      <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          <FormattedMessage id="page.main.title" />
        </Typography>
      </Paper>
    </>
  );
};

export default MainPage;
