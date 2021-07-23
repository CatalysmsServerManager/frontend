import { Template } from '../template.type';

interface Button {
  text: string;
  href: string;
  color: string; // Should be color interface
}

interface Data {
  name: string;
  paragraph_1: string;
  paragraph_2?: string;
  button: Button;
}

export interface Generic extends Template {
  name: 'generic',
  data: Data;
}
