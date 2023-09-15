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
  isExportPdf?: boolean
  isExportWeb?: boolean
}

const styles = `
  #composition-chart-canvas {
    max-width: 300px;
    max-height: 300px;
  }
`;
const stylesPdf = `
  #composition-chart-canvas-pdf {
    max-width: 1200px;
    max-height: 1200px;
  }
`;

const CompositionChartCanvas = (props: Props) => {
  const {
    chartData, onAnimationChartComplete, isExportPdf, isExportWeb
  } = props;

  const labels: any = [];
  const values: any = [];
  const backgroundColors: any = [];
  let dataLabelsOffset = 12;
  let dataLabelsSize = 12;

  if (isExportWeb) {
    dataLabelsOffset = window.innerWidth <= 767 ? 15 : 35;
    dataLabelsSize = 48;
  } else {
    dataLabelsOffset = window.innerWidth <= 1440 ? 0 : 12;
    dataLabelsSize = 12;
  }

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
    title: {
      display: false
    },
    animation: {
      duration: isExportPdf || isExportWeb ? 0 : 1000,
      onComplete() {
        return isExportPdf || isExportWeb
          ? onAnimationChartComplete(true)
          : null;
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: !isExportPdf,
        callbacks: {
          title: () => {
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
          size: dataLabelsSize,
          weight: 'bold'
        },
        anchor: 'end',
        align: 'start',
        offset: dataLabelsOffset
      }
    }
  };
  return (
    <div
      id="compositionChart"
      style={{
        visibility: isExportPdf ? 'hidden' : 'visible',
        height: isExportPdf ? 0 : 'auto'
      }}
      className="d-flex align-item-center justify-content-center"
    >
      <style>{isExportPdf ? stylesPdf : styles}</style>
      <Chart
        type="pie"
        id={
          isExportPdf
            ? 'composition-chart-canvas-pdf'
            : 'composition-chart-canvas'
        }
        data={chartDataDisplay}
        options={options}
        height={300}
        width={300}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

CompositionChartCanvas.defaultProps = {
  chartData: [],
  isExportPdf: false,
  isExportWeb: false
};

export default CompositionChartCanvas;
