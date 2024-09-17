import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface Props {
  data: any;
  options: any;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = ({ data, options }: Props) => {
  return (
    <div>
      {/* Render the Line chart */}
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
