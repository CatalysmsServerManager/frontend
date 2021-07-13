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

it('should fail, when no data is provided', async () => {
  // TODO
});

it('Should fail when mjml cannot be parsed', async () => {
  // TODO
});
