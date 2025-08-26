import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

interface Task {
  label: string;
  count: number;
}

interface ChartPieProps {
  tasks: Task[];
}

const ChartPie: React.FC<ChartPieProps> = ({ tasks }) => {
  const data = tasks.map((task, index) => ({
    id: index,
    value: task?.count,
    label: task?.label,
  }));
  return <PieChart series={[{ data }]} width={200} height={200} />;
};

export default ChartPie;
