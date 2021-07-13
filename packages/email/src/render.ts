import ejs from 'ejs';
import * as fs from 'fs/promises';
import mjmml2html from 'mjml';
import winston from 'winston';

import { Template } from './templates/template.type';
import { Generic } from './templates/generic';
import { welcomeMessage } from './templates/welcomeMessage';

// Use default logger and set transporter instead of using custom logger.
const console = new winston.transports.Console();
winston.add(console);

export async function render(template: Generic): Promise<string>;
export async function render(template: welcomeMessage,): Promise<string>;
export async function render(template: Template): Promise<string> {
  const path = `src/templates/${template.name}/template.ejs`;

  // this is probably lil weird no? @niekcandaele
  try {
    fs.access(path);
  } catch (error) {
    winston.error(error);
    winston.error('The requested template does not exist.');
  }

  const result = await ejs.renderFile(path, template.data, { async: true });
  const out = mjmml2html(result);
  if (out.errors.length > 0) {
    winston.error(`Email template ${template.name} generated the following errors: `, out.errors);
    return '';
  }
  return out.html;
};
