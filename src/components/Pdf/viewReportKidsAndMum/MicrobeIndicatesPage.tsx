import MicrobeIndicatesPageBreakPage from './Components/MicrobeIndicatesPageBreakPage';
import MicrobeIndicatesPageFirstPage from './Components/MicrobeIndicatesPageFirstPage';

interface Props {
  tableContent: any
  pageNumber: number
}

const MicrobeIndicatesPage = ({ tableContent, pageNumber }: Props) => {
  const content: any = [];
  const microArr: any = [];
  let sumRow = 0;
  tableContent.forEach((item: any) => {
    const idx = Math.floor((sumRow + item.rowNumber) / 40);
    const name = Array.isArray(item.microName) ? item.microName.join('\n') : item.microName;
    if (!microArr[idx]) {
      microArr[idx] = [];
      microArr[idx].push(name);
    } else if (!microArr[idx].includes(name)) microArr[idx].push(name);
    if (content[idx]) {
      if (content[idx][name]) {
        content[idx][name].push(item.text);
        sumRow += item.rowNumber;
      } else {
        content[idx][name] = [item.text];
        sumRow += item.rowNumber;
      }
    } else if (!content[idx]) {
      content[idx] = {};
      content[idx][name] = [item.text];
      sumRow += item.rowNumber;
    }
  });

  return (
    content.map((data: any, idx: number) => {
      return (
        idx === 0
          ? (
            <MicrobeIndicatesPageFirstPage
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              content={data}
              microArr={microArr[idx]}
              pageNumber={content.length > 1 ? pageNumber - 1 + idx : pageNumber}
            />
          )
          : (
            <MicrobeIndicatesPageBreakPage
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              content={data}
              microArr={microArr[idx]}
              pageNumber={content.length > 1 ? pageNumber - 1 + idx : pageNumber}
            />
          )
      );
    })
  );
};

export default MicrobeIndicatesPage;
