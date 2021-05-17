import { FC } from 'react';
import { ResponsiveLine } from '@nivo/line';

interface ChartProps {
  data: any[]
}
export const Chart: FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveLine
      axisLeft={{
        orient: 'left',
        legend: 'servers',
        legendOffset: 30,
        legendPosition: 'middle'
      }}
      axisRight={{
        orient: 'right',
        legend: 'players',
        legendOffset: 30,
        legendPosition: 'middle'
      }}
      colors={['#000', '#FF99FF']}
      curve="natural"
      data={data}
      enableGridX={false}
      enableGridY={false}
      useMesh
      xScale={{ type: 'point' }} />
  );
};
