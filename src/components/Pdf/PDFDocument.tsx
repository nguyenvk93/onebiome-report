/* eslint-disable camelcase */
import { Document, Font } from '@react-pdf/renderer';
import React from 'react';

// IMPORT FONT
import GothamBook from '../../fonts/Gotham-Book.otf';
import GothamBookItalic from '../../fonts/GothamBookItalic.ttf';
import GothamBold from '../../fonts/GothamBold.ttf';
import GothamBoldItaic from '../../fonts/Gotham-BoldIta.otf';
import BlogScript from '../../fonts/BlogScript.ttf';
import Bariol from '../../fonts/bariol/bariol_regular-webfont.ttf';
import BariolItalic from '../../fonts/bariol/bariol_regular_italic-webfont.ttf';
import BariolBold from '../../fonts/bariol/bariol_bold-webfont.ttf';
import BariolBoldItalic from '../../fonts/bariol/bariol_bold_italic-webfont.ttf';
import LucidaGrande from '../../fonts/font-convert/LucidaGrande.woff';
import LucidaGrandeBold from '../../fonts/font-convert/LucidaGrande-Bold.woff';
import DK_Knockdown from '../../fonts/DK_Knockdown.otf';

import AmaticSC_Bold from '../../fonts/AmaticSC_Bold.ttf';
import AmaticSC from '../../fonts/AmaticSC.ttf';

Font.registerHyphenationCallback((word) => { return [word]; });

// REGISTER FONT
Font.register({
  family: 'Gotham',
  fonts: [
    { src: GothamBook }, // font-style: normal, font-weight: normal
    { src: GothamBold, fontWeight: 700 },
    { src: GothamBookItalic, fontStyle: 'italic' },
    { src: GothamBoldItaic, fontStyle: 'italic', fontWeight: 700 }
  ]
});

Font.register({
  family: 'BlogScript', src: BlogScript
});

Font.register({
  family: 'DK_Knockdown', src: DK_Knockdown
});

Font.register({
  family: 'AmaticSC',
  fonts: [
    { src: AmaticSC },
    { src: AmaticSC_Bold, fontWeight: 700 },
    { src: AmaticSC, fontStyle: 'italic' },
    { src: AmaticSC_Bold, fontStyle: 'italic', fontWeight: 700 }
  ]
});
Font.register({
  family: 'Bariol',
  fonts: [
    { src: Bariol },
    { src: BariolBold, fontWeight: 700 },
    { src: BariolItalic, fontStyle: 'italic' },
    { src: BariolBoldItalic, fontStyle: 'italic', fontWeight: 700 }
  ]
});

Font.register({
  family: 'Lucida',
  fonts: [
    { src: LucidaGrande },
    { src: LucidaGrandeBold, fontWeight: 700 },
    { src: LucidaGrande, fontStyle: 'italic' },
    { src: LucidaGrandeBold, fontStyle: 'italic', fontWeight: 700 }
  ]
});

const PDFDocument = (props: any) => {
  const { pdfArray } = props;

  return (
    <Document>
      {
        pdfArray && pdfArray.length > 0
          ? pdfArray.map((component: any, idx: number) => {
            // eslint-disable-next-line react/no-array-index-key
            return (<React.Fragment key={idx}>{component}</React.Fragment>);
          })
          : ''
      }
    </Document>
  );
};

export default PDFDocument;
