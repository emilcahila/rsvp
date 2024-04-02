import { FormWithTextInput } from '@/form/RSVPForm';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  return (
    <Section>
      <CTABanner title="Add your details" />
      <FormWithTextInput />
    </Section>
  );
};

export { Banner };
