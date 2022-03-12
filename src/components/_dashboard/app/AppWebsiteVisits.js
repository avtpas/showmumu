// material
import { Box, Card, CardHeader } from '@mui/material';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '已修复竣工',
    type: 'column',
    data: [5, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
  },
  {
    name: '新增故障',
    type: 'area',
    data: [44, 55, 42, 67, 22, 43, 40, 41, 56, 27, 43],
  },
  {
    name: '修坏了',
    type: 'line',
    data: [39, 44, 20, 40, 9, 21, 3, 20, 12, 5, 13],
  },
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '01/01/2022',
      '02/01/2022',
      '03/01/2022',
      '04/01/2022',
      '05/01/2022',
      '06/01/2022',
      '07/01/2022',
      '08/01/2022',
      '09/01/2022',
      '10/01/2022',
      '11/01/2022',
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: y => {
          if (typeof y !== 'undefined') {
            return y.toFixed(0);
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="近一个月故障数量" subheader="环比提高43%" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
