import { Card, CardHeader } from "@mui/material";
// material
import { styled, useTheme } from "@mui/material/styles";
import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// utils
import { fNumber } from "../../../utils/formatNumber";
//
import { BaseOptionChart } from "../../charts";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

const CHART_DATA = [4344, 5435, 1443, 550, 2667];

export default function FaultsStatus() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main,
    ],
    labels: ["电缆端头", "电缆接头", "电缆本体", "引线", "其他"],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: "center" },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  });

  return (
    <Card>
      <CardHeader title="故障状态" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart
          type="pie"
          series={CHART_DATA}
          options={chartOptions}
          height={280}
        />
      </ChartWrapperStyle>
    </Card>
  );
}
