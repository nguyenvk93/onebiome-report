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
  #composition-chart-canvas-pdf {
    max-width: 1200px;
    max-height: 1200px;
  }
`;

const AdultsCompositionChartDonut = (props: Props) => {
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
        borderWidth: 3,
        borderColor: '#F6F0FF'
      }
    ]
  };
  const options: any = {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: true,
    cutout: '40%',
    animation: {
      duration: 0,
      onComplete() {
        return onAnimationChartComplete(true);
      }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        formatter: () => {
          return null;
        }
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
      }
    }
  };
  return (
    <div
      id="compositionChart-donut"
      style={{
        visibility: 'visible',
        height: 'auto',
        background: '#ffffff1a'
      }}
      className="d-flex align-item-center justify-content-center"
    >
      <style>{styles}</style>
      <Chart
        type="doughnut"
        id="composition-chart-canvas-pdf"
        data={chartDataDisplay}
        options={options}
        height={330}
        width={330}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

AdultsCompositionChartDonut.defaultProps = {
  chartData: []
};

export default AdultsCompositionChartDonut;
