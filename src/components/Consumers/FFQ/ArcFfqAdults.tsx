import { FOOD_GROUP_STYLE } from '../../../utility/FfqUtil';
import './ArcFfqAdults.scss';

interface Props {
  sample: any
}

const ArcFfqAdults = ({ sample }: Props) => {
  let rotatePie = 0;
  let rotatePieSmall = 0;

  const filterFFqData = sample.ffqChart
    .map((f: any) => { return (f.value >= 100 ? { ...f, value: 100 } : f); })
    .map(
      (f: any, index: number) => {
        return f.groupCode === FOOD_GROUP_STYLE[index].code && {
          ...FOOD_GROUP_STYLE[index],
          ...f
        };
      }
    );

  return (
    <>
      <div
        className={`ffq-arc-pdf-adults ${window.innerWidth <= 767 ? 'isMobile' : ''}`}
      >
        {/* Food Groups Chart */}
        <div className="chart-banner" id="chart-ffq-group">
          <img src="/img/pdf/adults/ffq/banner-food-groups.png" alt="" className="f-banner" />
          <div className="chart-bg">
            <img src="/img/pdf/adults/ffq/bg-white.png" alt="" className="f-bg" />
            <div className="chart-ffq-group">
              <div className="chart-inner">
                <img src="/img/pdf/adults/ffq/bg-food-groups.png" alt="" className="f-bg-inner" />
                {filterFFqData.map((item: any, index: number) => {
                  const rotateIcon = (item.value / 100) * 90;
                  let percentPie;

                  if (index === 0) {
                    percentPie = (90 - (item.value / 100) * 90) * -1;
                  } else {
                    if (index >= 2) {
                      rotatePie += 90;
                    }
                    percentPie = (item.value / 100) * 90 + rotatePie;
                  }

                  return (
                    <div key={item.groupCode}>
                      <div className={`mask ${item.position}`}>
                        <div
                          className="pie"
                          style={{ transform: `rotate(${percentPie}deg)` }}
                        />
                        <div className="pie-after" />
                      </div>
                      <span
                        className={`icon ${item.position}`}
                        style={{ transform: `rotate(${rotateIcon}deg)` }}
                      >
                        <span
                          className="f-inner"
                          style={{ transform: `rotate(${-1 * rotateIcon}deg)` }}
                        >
                          <img
                            src={`/img/pdf/adults/ffq/${item.icon}.png`}
                            alt={item.name}
                          />
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Food Groups Percent */}
        {filterFFqData.map((item: any, index: number) => {
          let percentPieActive: any;
          const rotateIcon = (item.value / 100) * 90;

          if (index === 0) {
            percentPieActive = (90 - (item.value / 100) * 90) * -1;
          } else {
            if (index >= 2) {
              rotatePieSmall += 90;
            }
            percentPieActive = (item.value / 100) * 90 + rotatePieSmall;
          }
          return (
            <div
              className="chart-bg"
              key={item.groupCode}
              id={`line-percent-${item.groupCode}`}
            >
              <img src="/img/pdf/adults/ffq/bg-white.png" alt="" className="f-bg" />
              <div className="chart-ffq-group">
                <div className="chart-inner">
                  <img src={`/img/pdf/adults/ffq/bg-group-${item.groupCode}.png`} alt="" className="f-bg-inner" />
                  {filterFFqData.map((f: any, indexInner: any) => {
                    if (index === indexInner) {
                      return (
                        <div key={f.groupCode}>
                          <div className={`mask ${f.position}`}>
                            <div
                              className="pie"
                              style={{ transform: `rotate(${percentPieActive}deg)` }}
                            />
                            <div className="pie-after" />
                          </div>
                          <span
                            className={`icon ${f.position}`}
                            style={{ transform: `rotate(${rotateIcon}deg)` }}
                          >
                            <span
                              className="f-inner"
                              style={{ transform: `rotate(${-1 * rotateIcon}deg)` }}
                            >
                              <img
                                src={`/img/pdf/adults/ffq/${f.icon}.png`}
                                alt={f.name}
                              />
                            </span>
                          </span>
                        </div>
                      );
                    }
                    return (
                      <div key={f.groupCode} className="disabled">
                        <div className={`mask ${f.position}`}>
                          <div className="pie-after" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArcFfqAdults;
