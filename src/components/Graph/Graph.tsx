import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const Graph = () => {
    const [data,setData] = useState({
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => Math.random()*1000),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => Math.random()*1000),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Dataset 3',
          data: labels.map(() => Math.random()*1000),
          borderColor: 'rgb(53, 0, 235)',
          backgroundColor: 'rgba(53, 0, 235, 0.5)',
        },
      ],
    });
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(res =>{ return res.json();
    }).then(data => {
      let casesData: unknown[] = Object.entries(data.cases).map(d => d[1]);
      let deathsData: unknown[] = Object.entries(data.deaths).map(d => d[1]);
      let recoveredData: unknown[] = Object.entries(data.recovered).map(d => d[1]);
      let datesData: unknown[] = Object.keys(data.cases);
      const casesNumberArray: number[] = casesData as number[];
      const deathsNumberArray: number[] = deathsData as number[];
      const recoveredNumberArray: number[] = recoveredData as number[];
      const datesStringArray: string[] = datesData as string[];
      setData({
                labels: datesStringArray.map(d => d),
                datasets: [
                    {
                        label: 'Cases',
                        data: casesNumberArray.map((d) => d),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                      },
                  {
                    label: 'Deaths',
                    data: deathsNumberArray.map((d) => d),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
                  {
                    label: 'Recovered',
                    data: recoveredNumberArray.map((d) => d),
                    borderColor: 'rgb(53, 0, 235)',
                    backgroundColor: 'rgba(53, 0, 235, 0.5)',
                  },
                ],
              })
        })
    },[])
  return <Line options={options} data={data} className='ml-auto mr-auto mt-10'/>;
}
export default Graph;