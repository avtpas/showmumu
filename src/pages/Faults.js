import DateFnsAdapter from '@date-io/date-fns';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
// material
import {
  Badge,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { filter } from 'lodash';
import { useState } from 'react';
import FaultDetailDialog from 'src/components/_dashboard/faults/FaultDetailDialog';
import FaultPostCard from 'src/components/_dashboard/faults/FaultPostCard';
import { ProductFilterSidebar } from 'src/components/_dashboard/products';
// components
import Page from '../components/Page';
//
import FAULTLIST from '../_mocks_/fault';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'id', label: '编号', alignRight: false },
  { id: 'company', label: '班组', alignRight: false },
  { id: 'time', label: '故障时间', alignRight: false },

  { id: 'lineNo', label: '线路编号', alignRight: false },
  { id: 'lineName', label: '线路名称', alignRight: false },
  { id: 'voltageGrade', label: '电压等级', alignRight: false },
  { id: 'faultDevice', label: '故障设备', alignRight: false },
  { id: 'faultPart', label: '故障部位', alignRight: false },
  { id: 'faultReson', label: '故障原因分类', alignRight: false },
  { id: 'faultResonMark', label: '故障原因简介', alignRight: false },
  { id: 'cost', label: '使用材料', alignRight: false },
  { id: 'pic', label: '负责人', alignRight: false },
  { id: 'status', label: '当前状态', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      _user => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
  }
  return stabilizedThis.map(el => el[0]);
}

export default function Faults() {
  const [openFilter, setOpenFilter] = useState(false);

  const now = new Date();
  const dateFns = new DateFnsAdapter();
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

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  const [detaildialogOpen, setDetailDialogOpen] = useState(false);
  const [selectFault, setSelectFault] = useState(undefined);

  const handleShowDetailDialog = fault => {
    setSelectFault(fault);
    setDetailDialogOpen(true);
  };

  const handleCloseDailog = () => {
    setDetailDialogOpen(false);
    setSelectFault({});
  };

  const handleNewFault = () => {
    setSelectFault({
      pic: {
        name: '王强',
      },
    });
    setDetailDialogOpen(true);
  };

  return (
    <Page title="故障列表">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h4" gutterBottom>
            故障列表
          </Typography>
          <Button
            variant="contained"
            onClick={handleNewFault}
            startIcon={<Icon icon={plusFill} />}
          >
            报故障
          </Button>
        </Stack>
        <Stack direction="row" mb={2}>
          <Badge badgeContent={4} color="secondary">
            <ProductFilterSidebar
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          </Badge>
        </Stack>
        <Grid container spacing={1}>
          {FAULTLIST.map((fault, index) => (
            <FaultPostCard
              detailHandler={handleShowDetailDialog}
              key={fault.id}
              fault={fault}
              index={index}
            />
          ))}
        </Grid>
        <FaultDetailDialog
          open={detaildialogOpen}
          onClose={handleCloseDailog}
          fault={selectFault}
        />
        <Button fullWidth>Load More</Button>
      </Container>
    </Page>
  );
}
