import ejs from 'ejs';
import mjmml2html from 'mjml';

import { Template } from './template.type';
import { CancelSubscription } from './templates/cancelSubscription';
import { Invoice } from './templates/invoice';

export async function render(template: CancelSubscription): Promise<string>;
export async function render(template: Invoice,): Promise<string>;
export async function render(template: Template): Promise<any> {
  const mjml = await ejs.renderFile<string>(`templates/${template.name}.ejs`, template.data);
  return mjmml2html(mjml);
}
