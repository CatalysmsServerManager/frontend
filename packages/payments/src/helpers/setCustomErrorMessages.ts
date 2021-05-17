import Joi from 'joi';
import * as Sentry from '@sentry/react';
interface IErrorReport extends Joi.ErrorReport {
  local: ILocal;
}
interface ILocal {
  limit: number;
  label: string;
  key: string;
}

export function setCustomErrorMessages(fieldName: string, errors: Joi.ErrorReport[]): Joi.ErrorReport | string {
  const err = errors.find((error) => {
    const extendedError = error as IErrorReport;
    switch (error.code) {
      case 'number.base':
        error.message = 'Field must be a number.';
        return true;

      case 'string.empty':
        error.message = 'Field cannot be empty.';
        return true;

      case 'string.required':
        error.message = 'Field is required.';
        return true;

      case 'string.min':
        error.message = `Field should have at least a length of ${extendedError.local.limit}.`;
        return true;

      case 'string.max':
        error.message = `Field should have at most a length of ${extendedError.local.limit}.`;
        return true;

      case 'string.pattern.base':
        error.message = 'Field does not match the standard pattern.';
        return true;
      case 'string.email':
        error.message = 'This is a not a valid email address.';
        return true;

      default:
        Sentry.captureMessage(`Custom error message for ${error.code} is not defined yet.`);
        return false;
    }
  });

  return err ? err : 'unexpected error';
}
