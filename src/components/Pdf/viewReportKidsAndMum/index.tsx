import { Page } from '@react-pdf/renderer';
import {
  DELIVERY_MODE, MILK_FEEDING, PAGE_SITE, USER_SAMPLE_ROLES
} from '../../../constants/DefaultValues';
import {
  LANDSCAPE, PAGE_STYLE, PDF_PAGE_INDEX, PORTRAIT
} from '../../../constants/PdfConstants';
import { arrayDeviceUtils } from '../../../helpers/CommonUtils';
import getIndicateContent from '../../../utility/ExplainPageUtils';
import getFoodGroupsIndicateContent from '../../../utility/FoodGroupsExplainUtils';
import { getAgeChildMonth, getChildStage } from '../../../utility/ProfileUtils';
import { getResultCompare, getTableContent, splitFoodTableMicrobe } from '../../../utility/ReportUtil';
import BifidobacteriumLovePage from './BifidobacteriumLovePage';
import ComparisonPageThreeColumns from './ComparisonPageThreeColumns';
import ComparisonPageTwoColumns from './ComparisonPageTwoColumns';
import CompositionPage from './CompositionPage';
import CSectionPage from './CSectionPage';
import CSectionPage2 from './CSectionPage2';
import DisclaimerForFFQ from './DisclaimerForFFQ';
import FactDescriptionPage from './FactDescriptionPage';
import FactDiagramPage from './FactDiagramPage';
import FactHelloPage from './FactHelloPage';
import FactsAboutOurMicrobiomePage from './FactsAboutOurMicrobiomePage';
import FoodExtrasSpecificInsights from './FoodExtrasSpecificInsights';
import FoodGroupsSpecificInsights from './FoodGroupsSpecificInsights';
import GuidelineRecommendationForFFQ from './GuidelineRecommendationForFFQ';
import ImportantHcp from './ImportantHcp';
import InformationHcpPage from './InformationHcpPage';
import InsightsFromYourFood from './InsightsFromYourFood';
import IntroductionPage from './IntroductionPage';
import IntroductionDearMummyPageKids from './Kids/IntroductionDearMummyPageKids';
import MicrobeIndicatesPage from './MicrobeIndicatesPage';
import MicrobiomeCompositionPage from './MicrobiomeCompositionPage';
import MicroMeterPage from './MicroMeterPage';
import MilestonesPage2ForFFQ from './MilestonesPage2ForFFQ';
import MilestonesPageForFFQ from './MilestonesPageForFFQ';
import IntroductionDearMummyPageMum from './Mum/IntroductionDearMummyPageMum';
import NatureYourMicrobiomePage from './NatureYourMicrobiomePage';
import ResultsFoodForFFQ from './ResultsFoodForFFQ';
import SummaryDescriptionPage from './SummaryDescriptionPage';
import SupportYourMicrobiomePage from './SupportYourMicrobiomePage';
import TableContentPage from './TableContentPage';
import ThankYouPage from './ThankYouPage';
import TipForHealthyPage from './TipForHealthyPage';
import TipsPage from './TipsPage';
import WhatToEatPage from './WhatToEatPage';

const ReportDataKidsAndMum = (data: any) => {
  const {
    member,
    sample,
    compositionData,
    comparisonData,
    summaryData,
    isBabyWeaned,
    summaryVDData,
    pageSite
  } = data;
  let childStage: any = '';
  let babyMonths: any = '';
  let goodMicrobeCheck: any;
  let dataFoodGroupPdf: Array<any> = [];
  const isBaby = member.role === USER_SAMPLE_ROLES.BABY;
  const isCSection = [
    DELIVERY_MODE.C_SECTION_ELECTIVE,
    DELIVERY_MODE.C_SECTION_EMERGENCY,
    DELIVERY_MODE.C_Section
  ].includes(member.deliveryMode);
  if (isBaby) {
    childStage = getChildStage({
      timePoint: sample.timePoint,
      monthTimePoint: sample.monthTimePoint
    });
    babyMonths = getAgeChildMonth({
      timePoint: sample.timePoint,
      monthTimePoint: sample.monthTimePoint
    });
  }
  const pageArray: Array<any> = [];
  const pdfArray: Array<any> = [];
  // IntroductionPage
  pageArray.push({
    id: 'INTRODUCTION',
    page: PDF_PAGE_INDEX.INTRODUCTION,
    size: 'PORTRAIT'
  });
  pdfArray.push(
    <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
      <IntroductionPage isBaby={isBaby} pageNumber={pageArray.length} />
    </Page>
  );

  const isHcpPage = pageSite === PAGE_SITE.HCP;
  if (isHcpPage) {
    // ImportantHcp
    pageArray.push({
      id: 'IMPORTANT_HCP',
      page: PDF_PAGE_INDEX.IMPORTANT_HCP,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <ImportantHcp isBaby={isBaby} pageNumber={pageArray.length} />
      </Page>
    );
    // InformationHcpPage
    pageArray.push({
      id: 'INFORMATIONHCP',
      page: PDF_PAGE_INDEX.INFORMATIONHCP,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <InformationHcpPage
          member={member}
          sample={sample}
          role={member.role}
          deliveryMode={member.deliveryMode}
          feedingPractise={sample.milkFeeding}
          pageNumber={pageArray.length}
        />
      </Page>
    );
  } else {
    // IntroductionDearMummyPageMum && IntroductionDearMummyPageKids
    pageArray.push({
      id: 'DEAR',
      page: PDF_PAGE_INDEX.DEAR,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        {
          isBaby
            ? (
              <IntroductionDearMummyPageKids
                sample={sample}
                babyMonths={babyMonths}
                member={member}
                pageNumber={pageArray.length}
              />
            )
            : <IntroductionDearMummyPageMum member={member} pageNumber={pageArray.length} />
        }
      </Page>
    );
  }
  // TableContentPage
  pageArray.push({
    id: 'TABLE_CONTENT',
    page: PDF_PAGE_INDEX.TABLE_CONTENT,
    size: 'PORTRAIT'
  });
  // MicrobiomeCompositionPage
  pageArray.push({
    id: 'MICROBIOME',
    page: PDF_PAGE_INDEX.MICROBIOME,
    size: 'PORTRAIT'
  });
  pdfArray.push(
    <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
      <MicrobiomeCompositionPage member={member} pageNumber={pageArray.length} />
    </Page>
  );

  const threeCols = sample && comparisonData.length > 0 && isBaby && member.deliveryMode !== DELIVERY_MODE.VD;

  const compositionDataPage = sample && compositionData.length > 0 ? arrayDeviceUtils(compositionData, 17) : [];
  const comparisonDataPage = sample && comparisonData.length > 0 ? arrayDeviceUtils(comparisonData, 19) : [];
  if (compositionDataPage && compositionDataPage.length > 0) {
    compositionDataPage.forEach((d: any) => {
      // CompositionPage
      pageArray.push({
        id: 'COMPOSITION',
        page: PDF_PAGE_INDEX.COMPOSITION,
        size: 'PORTRAIT'
      });
      pdfArray.push(
        <Page size={PORTRAIT} style={PAGE_STYLE} key={d[0].fullName + Math.random()} id={`page-${pageArray.length}`}>
          <CompositionPage isBaby={isBaby} compositionData={d} babyMonths={babyMonths} pageNumber={pageArray.length} member={member} sample={sample} />
        </Page>
      );
    });
  }
  if (comparisonDataPage && comparisonDataPage.length > 0) {
    comparisonDataPage.forEach((d: any) => {
      // ComparisonPageThreeColumns && ComparisonPageTwoColumns
      pageArray.push({
        id: 'COMPARISON',
        page: PDF_PAGE_INDEX.COMPARISON,
        size: 'PORTRAIT'
      });
      pdfArray.push(
        <Page size={PORTRAIT} style={PAGE_STYLE} key={d[0].fullName + Math.random()} id={`page-${pageArray.length}`}>
          {
            threeCols
              ? comparisonDataPage.map((cData) => {
                return (
                  <ComparisonPageThreeColumns
                    key={cData[0].fullName}
                    member={member}
                    comparedMommiesData={cData}
                    pageNumber={pageArray.length}
                    sample={sample}
                  />
                );
              })
              : comparisonDataPage.map((cData) => {
                return (
                  <ComparisonPageTwoColumns
                    key={cData[0].fullName}
                    member={member}
                    comparedMommiesData={cData}
                    pageNumber={pageArray.length}
                    sample={sample}
                  />
                );
              })
          }
        </Page>
      );
    });
  }

  const resultCompare = getResultCompare({
    role: member.role,
    isWeaned: isBabyWeaned,
    summaryData,
    summaryVDData
  });
  const dataExplain = getIndicateContent({
    role: member.role,
    isWeaned: isBabyWeaned,
    timePoint: sample.timePoint,
    monthTimePoint: sample.monthTimePoint,
    resultCompare,
    deliveryMode: member.deliveryMode
  });
  let pageMeterData: Array<any> = [];
  if (dataExplain.length > 0) {
    const { goodMicrobeData, goodVDMicrobeData } = resultCompare;
    const allMicrobeData = isBaby
      && member.deliveryMode !== DELIVERY_MODE.VD
      ? goodVDMicrobeData
      : goodMicrobeData;

    pageMeterData = arrayDeviceUtils(allMicrobeData, 8);

    if (pageMeterData && pageMeterData.length > 0) {
      pageMeterData.forEach((d: any) => {
        // MicroMeterPage
        pageArray.push({
          id: 'MICROMETER',
          page: PDF_PAGE_INDEX.MICROMETER,
          size: 'PORTRAIT'
        });
        pdfArray.push(
          <Page
            size={PORTRAIT}
            style={PAGE_STYLE}
            key={`${d[0].bacteriaName} - ${d[0].lower} - ${Math.random()}`}
            id={`page-${pageArray.length}`}
          >
            <MicroMeterPage
              isBaby={isBaby}
              microbeData={d}
              isWeaned={isBabyWeaned}
              pageNumber={pageArray.length}
            />
          </Page>
        );
      });
    }

    // SummaryDescriptionPage
    pageArray.push({
      id: 'SUMMARY_MICROBES',
      page: PDF_PAGE_INDEX.SUMMARY_MICROBES,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <SummaryDescriptionPage
          role={member.role}
          deliveryMode={member.deliveryMode}
          isBabyWeaned={isBabyWeaned}
          resultCompare={resultCompare}
          summaryData={summaryData}
          summaryVDData={summaryVDData}
          member={member}
          sample={sample}
          pageNumber={pageArray.length}
        />
      </Page>
    );

    let sumRow = 0;
    dataExplain.forEach((item: any) => {
      sumRow += item.rowNumber;
    });
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < Math.ceil((sumRow) / 40); index++) {
      // MicrobeIndicatesPage
      pageArray.push({
        id: 'MICRO_INDICATE',
        page: PDF_PAGE_INDEX.MICRO_INDICATE,
        size: 'PORTRAIT'
      });
    }
    pdfArray.push(
      <MicrobeIndicatesPage
        tableContent={dataExplain}
        pageNumber={pageArray.length}
      />
    );
  }

  if (resultCompare) {
    const isVDIAP = member.deliveryMode === DELIVERY_MODE.VD_IAP;
    if (isBaby && (isCSection || isVDIAP)) {
      goodMicrobeCheck = resultCompare.goodVDMicrobeData;
    } else {
      goodMicrobeCheck = resultCompare.goodMicrobeData;
    }
  }

  const { higherMicro, lowerMicro } = splitFoodTableMicrobe(goodMicrobeCheck);
  const isMicro = (higherMicro[0] && higherMicro[0].length > 0) || (lowerMicro[0] && lowerMicro[0].length > 0);
  const isHigherMicro = (higherMicro[0] && higherMicro[0].length > 0);
  const isLowerMicro = (lowerMicro[0] && lowerMicro[0].length > 0);
  if (!isBaby || isBabyWeaned) {
    // TipForHealthyPage
    pageArray.push({
      id: 'TIP',
      page: PDF_PAGE_INDEX.TIP,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <TipForHealthyPage role={member.role} pageNumber={pageArray.length} />
      </Page>
    );

    // NatureYourMicrobiomePage
    pageArray.push({
      id: 'NATURE',
      page: PDF_PAGE_INDEX.NATURE,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <NatureYourMicrobiomePage role={member.role} pageNumber={pageArray.length} />
      </Page>
    );

    if (isMicro) {
      // SupportYourMicrobiomePage
      pageArray.push({
        id: 'SUPPORT',
        page: PDF_PAGE_INDEX.SUPPORT,
        size: 'PORTRAIT'
      });
      pdfArray.push(
        <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
          <SupportYourMicrobiomePage
            role={member.role}
            higherMicro={higherMicro}
            lowerMicro={lowerMicro}
            babyMonths={babyMonths}
            pageNumber={pageArray.length}
          />
        </Page>
      );
    }
  }
  if (isBaby && !isBabyWeaned) {
    // BifidobacteriumLovePage
    pageArray.push({
      id: 'BIFI_LOVE',
      page: PDF_PAGE_INDEX.BIFI_LOVE,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <BifidobacteriumLovePage member={member} pageNumber={pageArray.length} />
      </Page>
    );

    if (
      [
        MILK_FEEDING.BREAST_MILK,
        MILK_FEEDING.INFANT_FORMULA,
        MILK_FEEDING.MIXED_FED
      ].includes(sample.milkFeeding)
    ) {
      // TipsPage
      pageArray.push({
        id: 'BABY_SUPPORT',
        page: PDF_PAGE_INDEX.BABY_SUPPORT,
        size: 'PORTRAIT'
      });
      pdfArray.push(
        <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
          <TipsPage
            milkFeeding={sample.milkFeeding}
            deliveryMode={member.deliveryMode}
            gender={member.gender}
            summaryData={summaryData}
            summaryVDData={summaryVDData}
            pageNumber={pageArray.length}
          />
        </Page>
      );
    }

    if (isHcpPage && isCSection && babyMonths < 12) {
      pageArray.push({
        id: 'C_SECTION',
        page: PDF_PAGE_INDEX.C_SECTION,
        size: 'PORTRAIT'
      });
      pdfArray.push(
        <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
          <CSectionPage pageNumber={pageArray.length} />
        </Page>
      );
      pageArray.push({
        id: 'C_SECTION_TWO',
        page: PDF_PAGE_INDEX.C_SECTION_TWO,
        size: 'PORTRAIT'
      });
      pdfArray.push(
        <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
          <CSectionPage2 pageNumber={pageArray.length} />
        </Page>
      );
    }
  }

  if (isHigherMicro && (!isBaby || isBabyWeaned)) {
    higherMicro.forEach((d: any) => {
      // WhatToEatPage
      pageArray.push({
        id: 'WHAT_TO_EAT',
        page: PDF_PAGE_INDEX.WHAT_TO_EAT,
        size: 'LANDSCAPE'
      });
      pdfArray.push(
        <Page size={LANDSCAPE} style={PAGE_STYLE} key={`higherMicro_${Math.random()}`} id={`page-${pageArray.length}`}>
          <WhatToEatPage
            role={member.role}
            dataMicro={d}
            isHigherMicro
            pageNumber={pageArray.length}
          />
        </Page>
      );
    });
  }
  if (isLowerMicro && (!isBaby || isBabyWeaned)) {
    lowerMicro.forEach((d: any) => {
      // WhatToEatPage
      pageArray.push({
        id: 'WHAT_TO_EAT',
        page: PDF_PAGE_INDEX.WHAT_TO_EAT,
        size: 'LANDSCAPE'
      });
      pdfArray.push(
        <Page size={LANDSCAPE} style={PAGE_STYLE} key={`higherMicro_${Math.random()}`} id={`page-${pageArray.length}`}>
          <WhatToEatPage
            role={member.role}
            dataMicro={d}
            isHigherMicro={false}
            babyMonths={babyMonths}
            pageNumber={pageArray.length}
          />
        </Page>
      );
    });
  }

  // For baby weaned and less 12 months
  if (sample.ffqChart && isBaby && (isBabyWeaned && babyMonths < 12)) {
    // Page - Results from your child’s food
    pageArray.push(
      {
        id: 'RESULTS_FOOD_FOR_FFQ',
        page: PDF_PAGE_INDEX.RESULTS_FOOD_FOR_FFQ,
        size: 'PORTRAIT'
      },
      {
        id: 'RESULTS_FOOD_FOR_FFQ',
        page: PDF_PAGE_INDEX.RESULTS_FOOD_FOR_FFQ,
        size: 'PORTRAIT'
      }
    );
    pdfArray.push(
      <ResultsFoodForFFQ
        ffq={sample.ffq}
        pageArray={pageArray}
        pageNumber={pageArray.length}
      />
    );

    // Page - Guideline recommendation
    pageArray.push({
      id: 'GUIDELINE_RECOMMENDATION_FOR_FFQ',
      page: PDF_PAGE_INDEX.GUIDELINE_RECOMMENDATION_FOR_FFQ,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <GuidelineRecommendationForFFQ pageNumber={pageArray.length} />
      </Page>
    );

    // Page - Milestones: Food texture & taste variety
    pageArray.push({
      id: 'MILESTONES_PAGE_FOR_FFQ',
      page: PDF_PAGE_INDEX.MILESTONES_PAGE_FOR_FFQ,
      size: 'LANDSCAPE'
    });
    pdfArray.push(
      <Page size={LANDSCAPE} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <MilestonesPageForFFQ gender={member.gender} pageNumber={pageArray.length} />
      </Page>
    );

    // Page - Milestones: Oral motor skill
    pageArray.push({
      id: 'MILESTONES_PAGE2_FOR_FFQ',
      page: PDF_PAGE_INDEX.MILESTONES_PAGE2_FOR_FFQ,
      size: 'LANDSCAPE'
    });
    pdfArray.push(
      <Page size={LANDSCAPE} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <MilestonesPage2ForFFQ gender={member.gender} pageNumber={pageArray.length} />
      </Page>
    );
  }

  // For mother or baby weaned
  if (sample.ffqChart && (!isBaby || (isBabyWeaned && babyMonths > 12))) {
    // InsightsFromYourFood
    pageArray.push({
      id: 'INSIGHTS_FROM_YOUR_FOOD',
      page: PDF_PAGE_INDEX.INSIGHTS_FROM_YOUR_FOOD,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <InsightsFromYourFood
          ffqChart={sample.ffqChart}
          isBaby={isBaby}
          gender={member.gender}
          babyMonths={babyMonths}
          pageNumber={pageArray.length}
        />
      </Page>
    );
    // Page - Food Groups Specific Insights
    const getOnlyInsufficient = sample.ffqChart.filter(
      (f: any) => { return f.value < 85; }
    );
    const dataFoodGroupsExplain = getFoodGroupsIndicateContent({
      role: member.role,
      ffqChart: getOnlyInsufficient,
      babyMonths,
      dataExtraFood: sample.ffqChartExtraFood || []
    });
    const { foodGroup, extraFood } = dataFoodGroupsExplain;
    dataFoodGroupPdf = foodGroup;
    let sumRowF = 0;
    dataFoodGroupPdf.forEach((item: any) => {
      sumRowF += item.rowNumber;
    });
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < Math.ceil((sumRowF) / 42); index++) {
      // FoodGroupsSpecificInsights
      pageArray.push({
        id: 'FOOD_GROUPS_INSUFFICIENT',
        page: PDF_PAGE_INDEX.FOOD_GROUPS_INSUFFICIENT,
        size: 'PORTRAIT'
      });
    }
    pdfArray.push(
      <FoodGroupsSpecificInsights
        pageData={pageArray}
        foodGroup={dataFoodGroupPdf}
        role={member.role}
        babyMonths={babyMonths}
        pageNumber={pageArray.length}
      />
    );

    // FoodExtrasSpecificInsights
    if (extraFood && extraFood.length > 0) {
      pageArray.push({
        id: 'FOOD_GROUPS_INSUFFICIENT',
        page: PDF_PAGE_INDEX.FOOD_GROUPS_INSUFFICIENT,
        size: 'PORTRAIT'
      });
      pdfArray.push(
        <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
          <FoodExtrasSpecificInsights
            extraFood={extraFood}
            role={member.role}
            pageNumber={pageArray.length}
          />
        </Page>
      );
    }

    // DisclaimerForFFQ
    pageArray.push({
      id: 'DISCLAIMER_FOR_FFQ',
      page: PDF_PAGE_INDEX.DISCLAIMER_FOR_FFQ,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <DisclaimerForFFQ role={member.role} pageNumber={pageArray.length} />
      </Page>
    );
  }

  if (!isHcpPage) {
    // ThankYouPage
    pageArray.push({
      id: 'THANK_YOU',
      page: PDF_PAGE_INDEX.THANK_YOU,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <ThankYouPage
          role={member.role}
          isBabyWeaned={isBabyWeaned}
          pageNumber={pageArray.length}
        />
      </Page>
    );
    // FactsAboutOurMicrobiomePage
    pageArray.push({
      id: 'FACT_ABOUT',
      page: PDF_PAGE_INDEX.FACT_ABOUT,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <FactsAboutOurMicrobiomePage pageNumber={pageArray.length} />
      </Page>
    );
    // FactHelloPage
    pageArray.push({
      id: 'FACT_HELLO',
      page: PDF_PAGE_INDEX.FACT_HELLO,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <FactHelloPage pageNumber={pageArray.length} />
      </Page>
    );
    // FactDiagramPage
    pageArray.push({
      id: 'FACT_DIAGRAM',
      page: PDF_PAGE_INDEX.FACT_DIAGRAM,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <FactDiagramPage pageNumber={pageArray.length} />
      </Page>
    );
    // FactDescriptionPage
    pageArray.push({
      id: 'FACT_DESCRIPTION',
      page: PDF_PAGE_INDEX.FACT_DESCRIPTION,
      size: 'PORTRAIT'
    });
    pdfArray.push(
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <FactDescriptionPage pageNumber={pageArray.length} />
      </Page>
    );
  }
  pdfArray.splice(
    isHcpPage ? 3 : 2,
    0,
    <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${isHcpPage ? 4 : 3}`}>
      <TableContentPage
        hadData={!!(compositionData && compositionData.length > 0)}
        childStage={childStage}
        role={member.role}
        isBabyWeaned={isBabyWeaned}
        tableContentPage={pageArray}
        isHcp={isHcpPage}
        isCSection={isCSection}
        babyMonths={babyMonths}
        haveFfqChart={!!sample.ffqChart}
        getTableContent={getTableContent}
        pageNumber={isHcpPage ? 4 : 3}
      />
    </Page>
  );

  return { pageArray, pdfArray };
};

export default ReportDataKidsAndMum;
