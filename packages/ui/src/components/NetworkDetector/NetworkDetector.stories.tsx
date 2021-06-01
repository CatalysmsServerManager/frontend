import { Meta, Story } from '@storybook/react';
import { NetworkDetector } from 'components';

export default {
  title: 'Components/NetworkDetector',
  component: NetworkDetector,
} as Meta;

export const Default: Story = () => (
  <div>
    <p>You can simulate an offline state in the browsers network tab.</p>
    <NetworkDetector />
  </div>
);
