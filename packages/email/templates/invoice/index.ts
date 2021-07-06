import { Template } from '../../template.type';

interface Data {
  name: string;
}

export interface Invoice extends Template {
  name: 'invoice',
  data: Data;
}
