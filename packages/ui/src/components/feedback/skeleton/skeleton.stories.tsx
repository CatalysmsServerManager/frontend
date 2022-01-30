import { Meta, Story } from '@storybook/react';
import { Skeleton, SkeletonProps } from '.';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
} as Meta;

export const Default: Story<SkeletonProps> = (args) => (
  <>
    <Skeleton variant="text" />
    <Skeleton height={40} variant="circular" width={40} />
    <Skeleton height={180} variant="rectangular" width={210} />
  </>
);

export const Text: Story<SkeletonProps> = (args) => (
  <>
    <Skeleton variant="text" />
    <Skeleton variant="text" />
    <Skeleton variant="text" />
  </>
);
