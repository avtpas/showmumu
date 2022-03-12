import closeFill from '@iconify/icons-eva/close-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { Icon } from '@iconify/react';
import { DateTimePicker } from '@mui/lab';
// material
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { Form, FormikProvider } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
//
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];
export const FILTER_GENDER_OPTIONS = [
  '电缆端头',
  '电缆接头',
  '电缆本体',
  '引线',
  '其他',
];
export const FILTER_CATEGORY_OPTIONS = [
  '自然老化',
  '人为破坏',
  '事故破坏',
  '设计错误',
  '其它',
];
export const FILTER_RATING_OPTIONS = [
  'up4Star',
  'up3Star',
  'up2Star',
  'up1Star',
];
export const FILTER_PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
];
export const FILTER_COLOR_OPTIONS = ['未处理', '处理中', '已处理'];

// ----------------------------------------------------------------------

ShopFilterSidebar.propTypes = {
  isOpenFilter: PropTypes.bool,
  onResetFilter: PropTypes.func,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
  formik: PropTypes.object,
};

export default function ShopFilterSidebar({
  isOpenFilter,
  onResetFilter,
  onOpenFilter,
  onCloseFilter,
  formik,
}) {
  const { values, getFieldProps } = formik;
  const [switches, setSwitches] = useState({
    gender: false,
    category: false,
    colors: false,
    timeRange: false,
  });

  console.log(getFieldProps('startTime'));

  const handleSwitch = key => (o, hide) => {
    setSwitches({
      ...switches,
      [key]: hide,
    });
  };

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Icon icon={roundFilterList} />}
        onClick={onOpenFilter}
      >
        过滤器&nbsp;
      </Button>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <Drawer
            anchor="right"
            open={isOpenFilter}
            onClose={onCloseFilter}
            PaperProps={{
              sx: { width: 280, border: 'none', overflow: 'hidden' },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 2 }}
            >
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                过滤器
              </Typography>
              <IconButton onClick={onCloseFilter}>
                <Icon icon={closeFill} width={20} height={20} />
              </IconButton>
            </Stack>

            <Divider />

            <Scrollbar>
              <Stack spacing={3} sx={{ p: 3 }}>
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    故障部位
                    <Switch onChange={handleSwitch('gender')} />
                  </Typography>
                  <FormGroup>
                    <Collapse in={switches.gender}>
                      {FILTER_GENDER_OPTIONS.map(item => (
                        <FormControlLabel
                          key={item}
                          control={
                            <Checkbox
                              {...getFieldProps('gender')}
                              value={item}
                              checked={values.gender.includes(item)}
                            />
                          }
                          label={item}
                        />
                      ))}
                    </Collapse>
                  </FormGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    故障原因
                    <Switch onChange={handleSwitch('category')} />
                  </Typography>
                  <FormGroup>
                    <Collapse in={switches.category}>
                      {FILTER_CATEGORY_OPTIONS.map(item => (
                        <FormControlLabel
                          key={item}
                          control={
                            <Checkbox
                              {...getFieldProps('category')}
                              value={item}
                              checked={values.category.includes(item)}
                            />
                          }
                          label={item}
                        />
                      ))}
                    </Collapse>
                  </FormGroup>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    故障状态
                    <Switch onChange={handleSwitch('colors')} />
                  </Typography>
                  <Collapse in={switches.colors}>
                    {FILTER_COLOR_OPTIONS.map(item => (
                      <FormControlLabel
                        key={item}
                        control={
                          <Checkbox
                            {...getFieldProps('colors')}
                            value={item}
                            checked={values.colors.includes(item)}
                          />
                        }
                        label={item}
                      />
                    ))}
                  </Collapse>
                </div>

                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    故障时间
                    <Switch onChange={handleSwitch('timeRange')} />
                  </Typography>
                  <FormGroup>
                    <Collapse in={switches.timeRange}>
                      <Stack spacing={3}>
                        <div></div>
                        <DateTimePicker
                          renderInput={props => <TextField {...props} />}
                          label="开始时间"
                          {...getFieldProps('startTime')}
                        />
                        <DateTimePicker
                          renderInput={props => <TextField {...props} />}
                          label="结束时间"
                          {...getFieldProps('endTime')}
                        />
                      </Stack>
                    </Collapse>
                  </FormGroup>
                </div>
              </Stack>
            </Scrollbar>

            <Box sx={{ p: 3 }}>
              <Button
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={onResetFilter}
                startIcon={<Icon icon={roundClearAll} />}
              >
                Clear All
              </Button>
            </Box>
          </Drawer>
        </Form>
      </FormikProvider>
    </>
  );
}
