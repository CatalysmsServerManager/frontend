/// <reference types="jest" />

import { render } from '../../render';

it('Should contain all variables', async () => {
  const result = await render({
    name: 'generic', data:
    {
      name: 'Catalysm',
      paragraph_1: 'This is the first paragraph',
      paragraph_2: 'This is the second paragraph',
      button: {
        color: '#ffffff',
        href: 'https://csmm.app',
        text: 'Undo cancellation'
      }
    }
  });
  expect(result).toContain('Catalysm');
  expect(result).toContain('This is the first paragraph');
  expect(result).toContain('This is the second paragraph');
});

it('Should fail, when no data is provided', async () => {
  // TODO
});

it('Should fail when MJML cannot be parsed', async () => {
});

describe('Load external images', () => {
  // Although this will not prevent a broken link, it will fail when there is a broken link.
  it('Should be able to request logo in header', async () => {
    // TODO
  });
});
