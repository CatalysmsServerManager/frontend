import ejs from 'ejs';
import mjmml2html from 'mjml';

import { Template } from '../template.type';
import { Generic } from './templates/generic';
import { welcomeMessage } from './templates/welcomeMessage';

export async function render(template: Generic): Promise<string>;
export async function render(template: welcomeMessage,): Promise<string>;
export async function render(template: Template): Promise<string> {
  // changes variables with custom data.
  const result = await ejs.renderFile(`src/templates/${template.name}/template.ejs`, template.data, { async: true });
  const out = mjmml2html(result);

  if (out.errors.length !== 0) {
    // change this to logger.
    console.error('Email generated the following errors', out.errors);
  }
  return out.html;
};
