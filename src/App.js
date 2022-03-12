// routes
import dateAdapter from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/lab';
import { SnackbarProvider } from 'notistack';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
// components
import ScrollToTop from './components/ScrollToTop';
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <LocalizationProvider dateAdapter={dateAdapter}>
        <SnackbarProvider autoHideDuration={3000}>
          <ScrollToTop />
          <GlobalStyles />
          <BaseOptionChartStyle />
          <Router />
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeConfig>
  );
}
