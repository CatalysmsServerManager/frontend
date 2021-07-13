import { Template } from '../template.type';

interface Data {
  name: string;
}
export interface welcomeMessage extends Template {
  name: 'welcomeMessage',
  data: Data;
}
