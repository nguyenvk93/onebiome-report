import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onAnimationChartComplete: (val: any) => void
  chartData?: {
    name: string
    value: number
    color: string
  }[] | any
}

const styles = `
  #composition-chart-canvas {
    max-width: 300px;
    max-height: 300px;
  }
`;

const CompositionChartDonut = (props: Props) => {
  const { chartData, onAnimationChartComplete } = props;
  const labels: Array<any> = [];
  const values: Array<any> = [];
  const backgroundColors: Array<any> = [];
  chartData.forEach((element: any) => {
    labels.push(element.name);
    values.push(element.value);
    backgroundColors.push(element.color);
  });

  const chartDataDisplay = {
    labels,
    datasets: [
      {
        label: '',
        data: values,
        backgroundColor: backgroundColors,
        borderWidth: 0
      }
    ]
  };
  const options: any = {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: true,
    cutout: '50%',
    title: {
      display: false
    },
    animation: {
      duration: 1000,
      onComplete() {
        return onAnimationChartComplete(true);
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        bodyFont: {
          weight: 'bold'
        },
        footerFont: {
          style: 'italic',
          weight: 'normal'
        },
        callbacks: {
          title() {
            return '';
          },
          label(context: any) {
            const label = context.label || '';
            const indexSubName = label.indexOf(' (');
            const name = indexSubName === -1 ? label : label.slice(0, indexSubName);
            const value = context.formattedValue;
            return ` ${name}: ${value}%`;
          }
        }
      },
      datalabels: {
        formatter: (value: any) => {
          const text = `${Math.trunc(value)}%`;
          return text;
        },
        color: '#ffffff',
        font: {
          weight: 'bold'
        },
        anchor: 'end',
        align: 'start',
        offset: window.innerWidth <= 1440 ? 0 : 12
      }
    }
  };
  return (
    <div
      id="compositionChart"
      style={{
        visibility: 'visible',
        height: 'auto'
      }}
      className="d-flex align-item-center justify-content-center"
    >
      <style>{styles}</style>
      <Chart
        type="doughnut"
        id="composition-chart-canvas"
        data={chartDataDisplay}
        options={options}
        height={300}
        width={300}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

CompositionChartDonut.defaultProps = {
  chartData: []
};

export default CompositionChartDonut;
