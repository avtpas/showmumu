// material
import { Box, Card, CardHeader } from '@mui/material';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '长度',
    type: 'column',
    data: [39, 44, 20, 40, 9, 21, 3],
  },
];

export default function Lines() {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    labels: ['隧道', '顶管', '土管', '排管', '拉管', '直埋', '工井'],
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
      <CardHeader title="新投土建长度统计" subheader="环比提高43%" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
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
