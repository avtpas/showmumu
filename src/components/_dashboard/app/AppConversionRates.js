// material
import { Box, Card, CardHeader } from '@mui/material';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [40, 43, 44, 47, 54, 58, 69, 110, 120, 138] }];

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: seriesName => fNumber(seriesName) + '分钟',

        title: {
          formatter: v => '平均时间',
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
    },
    xaxis: {
      categories: [
        '王强组',
        '钱小木组',
        '赵大嘴组',
        '赖森宝组',
        '余杰斯组',
        '朱义贼组',
        '梅酒桶组',
        '萧阿狸组',
      ],
    },
  });

  return (
    <Card>
      <CardHeader title="班组平均解决故障时间" subheader="单位（分钟）" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
