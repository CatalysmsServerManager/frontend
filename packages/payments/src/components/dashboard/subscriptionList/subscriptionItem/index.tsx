// @ts-nocheck

import { createRef, FC, useContext, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Container, State } from './style';
import { SUBSCRIPTION_STATES } from '../../../../enums';
import { DateTime } from 'luxon';
import { ISubscriptionWithProduct } from '../../../../context';
import { Menu } from '../../../../icons';
import { ThemeContext } from 'styled-components';
import { ThemeType } from '../../../../constants/theme';
import { SubscriptionItemSettings } from '../subscriptionItemSettings';
import { usePopper } from 'react-popper';
import { useOutsideAlerter } from '../../../../hooks';
import { detectOverflow } from '@popperjs/core';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

export const SubscriptionItem: FC<ISubscriptionWithProduct> = ({ product, state, id, paidUntil, pterodactylId }) => {
  const themeContext = useContext<ThemeType>(ThemeContext);

  /* Because the wrapping container hides the overflowing content, we need to render the settings menu on root level.*/
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [showSettings, setShow] = useState(false);

  // refs
  const containerRef = createRef<HTMLDivElement>();
  const settingsRef = createRef<HTMLDivElement>();

  // memo prevents infinite loop of popper's core call.
  const customModifier = useMemo(() => ({
    name: 'scroll-overflow',
    enabled: true,
    phase: 'main',
    fn({ state }) {
      // TODO: Update render position on scroll. (severity: minor, not breaking)
      detectOverflow(state, { boundary: containerRef });
    }
  }), []);

  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'right', modifiers: [customModifier] });

  useOutsideAlerter(settingsRef, (): void => {
    // we first need to check if a modal is opened. IF that is the case we should not hide the settings.
    if (!document.getElementById('modal')?.hasChildNodes()) setShow(false);
  });

  return (
    <Container
      ref={containerRef}
      variants={item}
    >
      <div className='p'>{product.name}</div>
      <div className='p'>{DateTime.fromISO(paidUntil.toString()).toLocaleString()}</div>
      <State className='p payment-state'>
        <span className={state}>{state}</span>
      </State>
      <div className='p'> <Menu fill={themeContext.s} onClick={() => setShow(!showSettings)} pointer ref={setReferenceElement} /></div>
      {
        createPortal(
          <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            {
              showSettings
                ? <SubscriptionItemSettings pterodactylId={pterodactylId} ref={settingsRef} subscriptionId={id} subscriptionState={state} />
                : null
            }
          </div>,
          document.querySelector('#popper')
        )
      }
    </Container >

  );
};