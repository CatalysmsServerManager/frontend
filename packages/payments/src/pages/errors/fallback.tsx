import { FC } from 'react';
import { ErrorTemplate } from '../template';

export const ErrorFallback: FC = () => <ErrorTemplate description="Something went wrong" title="WOOPS" />;
