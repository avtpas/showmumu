// material
import DateFnsAdapter from '@date-io/date-fns';
import { DatePicker } from '@mui/lab';
import { Container, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import FaultsCategory from 'src/components/_dashboard/faults/FaultsCategory';
import FaultsReson from 'src/components/_dashboard/faults/FaultsReson';
import FaultsSelect from 'src/components/_dashboard/faults/FaultsSelect';
import FaultsStatus from 'src/components/_dashboard/faults/FaultsStatus';
import FaultsTotal from 'src/components/_dashboard/faults/FaultsTotal';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const dateFns = new DateFnsAdapter();

  const now = new Date();
  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      startTime: dateFns.addDays(now, -1),
      endTime: now,
    },
    onSubmit: () => {
      // setOpenFilter(false);
    },
  });

  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5, marginBottom: 0 }}>
          故障统计
        </Typography>

        <Stack spacing={2} flexShrink={0} sx={{ my: 1 }}>
          <div></div>
          <FaultsTotal />
          <Stack spacing={2} direction="row">
            <DatePicker
              onChange={() => {}}
              renderInput={props => <TextField {...props} />}
              label="开始时间"
            />

            <DatePicker
              onChange={() => {}}
              renderInput={props => <TextField {...props} />}
              label="结束时间"
            />
          </Stack>
          <FaultsSelect />

          {/* <ProductList products={PRODUCTS} /> */}
          {/* <ProductCartWidget /> */}
          <FaultsStatus />
          <FaultsReson />
          <FaultsCategory />
        </Stack>
      </Container>
    </Page>
  );
}
