import { Meta, Story } from '@storybook/react';
import { styled } from '../../../styled';
import { Accordion, AccordionProps } from '.';

export default {
  title: 'Layout/Accordion',
  component: Accordion,
} as Meta;

const AccordionContent = styled.div`
  display: flex;
  align-items: center;
  p {
    color: black;
    font-size: 1.225rem;
  }
`;

export const Default: Story<AccordionProps> = () => (
  <div>
    <h3>Frequently Asked Questions</h3>
    <Accordion title="How does CSMM work?">
      <AccordionContent>
        <p>
          CSMM makes use of a webapi.
        </p>
      </AccordionContent>
    </Accordion>
    <Accordion defaultVisible title="Is CSMM free?" >
      <AccordionContent>
        <p>
          CSMM costs you nothing! While donators have access to extended features, free users can expect a fully featured server manager.
        </p>
      </AccordionContent>
    </Accordion>
  </div>
);
