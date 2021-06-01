import { Meta, Story } from '@storybook/react';
import styled from 'styled';
import { Collapse, CollapseProps } from 'components';

export default {
  title: 'Components/Collapse',
  component: Collapse,
} as Meta;

const CollapseContent = styled.div`
  display: flex;
  align-items: center;
  p {
    color: black;
    font-size: 1.225rem;
  }
`;

export const Default: Story<CollapseProps> = () => (
  <div>
    <h3>Frequently Asked Questions</h3>
    <Collapse title="How does CSMM work?">
      <CollapseContent>
        <p>
          CSMM makes use of a webapi.
        </p>
      </CollapseContent>
    </Collapse>
    <Collapse defaultVisible title="Is CSMM free?" >
      <CollapseContent>
        <p>
          CSMM costs you nothing! While donators have access to extended features, free users can expect a fully featured server manager.
        </p>
      </CollapseContent>
    </Collapse>
  </div>
);

// How does csmm work (via webapi)
// is csmm free (gratis, hosted version)
// What is the meaning of life the universe and everything.
