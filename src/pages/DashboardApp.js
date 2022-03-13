// material
import { Box, Container, Grid, Typography } from '@mui/material';
import Lines from 'src/components/_dashboard/app/Lines';
// components
import Page from '../components/Page';
import {
  AppBugReports,
  AppConversionRates,
  AppCurrentVisits,
  AppItemOrders,
  AppNewsUpdate,
  AppNewUsers,
  AppTasks,
  AppWebsiteVisits,
  AppWeeklySales,
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="大盘">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">欢迎回来</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppCurrentSubject /> */}
            <Lines />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
