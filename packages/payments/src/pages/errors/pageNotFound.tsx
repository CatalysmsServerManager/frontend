import { FC } from 'react';
import { ErrorTemplate } from '../template';

export const PageNotFound: FC = () => <ErrorTemplate description="The page could not be found." title="404" />;
