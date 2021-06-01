import { Meta, Story } from '@storybook/react';
import { NotificationBanner, NotificationBannerProps } from 'components';

export default {
  title: 'Components/NotificationBanner',
  component: NotificationBanner,
} as Meta;

export const Default: Story<NotificationBannerProps> = (args) => (
  <NotificationBanner description="this is the description" title="this is the title" />
);
