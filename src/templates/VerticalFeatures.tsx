import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import CountdownDisplay from './CountdownDisplay';

const VerticalFeatures = () => (
  <Section>
    <VerticalFeatureRow
      title="Our big day is coming soon!"
      description="December 14, 2024"
      center
      yPadding="0rem"
    />
    <CountdownDisplay />
    <VerticalFeatureRow
      title="Lola Cafe"
      description="2nd Floor S'Maison, Conrad Hotel, MOA Complex, Pasay City"
      images={[
        'assets/images/lola-cafe-1.jpg',
        'assets/images/conrad-smaison.jpg',
        'assets/images/lola-cafe-3.webp',
      ]}
      withLink="https://www.lolagroupe.com/"
    />
  </Section>
);

export { VerticalFeatures };
