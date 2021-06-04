// @ts-nocheck

import { createRef, FC, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Container, Data } from './style';
import { DateTime } from 'luxon';
import { ISubscriptionWithProduct } from '../../../../context';
import { AiOutlineMenu as Menu } from 'react-icons/ai';
import { SubscriptionItemSettings } from '../SubscriptionItemSettings';
import { usePopper } from 'react-popper';
import { useOutsideAlerter, useTheme, Chip } from '@csmm/ui';
import { detectOverflow } from '@popperjs/core';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};
function getStateColor(state: string) {
  switch (state) {
    case 'init':
      return 'info';
    case 'deploy':
      return 'tertiary';
    case 'active':
      return 'primary';
    case 'cancelled':
      return 'secondary';
    case 'overdue':
      return 'error';
  }
}

export const SubscriptionItem: FC<ISubscriptionWithProduct> = ({ product, state, id, paidUntil, pterodactylRemoteId }) => {
  const theme = useTheme();

  /* Because the wrapping container hides the overflowing content, we need to render the settings menu on root level.*/
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  // refs
  const settingsRef = createRef<HTMLDivElement>();
  useOutsideAlerter(settingsRef, (): void => {
    // we first need to check if a modal is opened.
    // Otherwise the click event in the modal will fail.
    if (!document.getElementById('modal')?.hasChildNodes()) setShowSettings(false);
  });

  const containerRef = createRef<HTMLDivElement>();
  // memo prevents infinite loop of popper's core call.
  const customModifier = useMemo(() => ({
    name: 'scroll-overflow',
    enabled: true,
    phase: 'main',
    fn({ state }) {
      detectOverflow(state, { boundary: containerRef });
    }
  }), []);
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'right', modifiers: [customModifier] });

  return (
    <Container
      ref={containerRef}
      variants={item}
    >
      <Data>{product.name}</Data>
      <Data>{DateTime.fromISO(paidUntil).toLocaleString()}</Data>
      <Data> <Chip color={getStateColor(state)} label={state} /></Data>
      <Data ref={setReferenceElement}>
        <Menu fill={theme.colors.secondary} onClick={() => setShowSettings(true)} pointer size={24} />
      </Data>
      {
        createPortal(
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            {
              showSettings
              && <SubscriptionItemSettings pterodactylId={pterodactylRemoteId} ref={settingsRef} subscriptionId={id} subscriptionState={state} />
            }
          </motion.div>,
          document.querySelector('#popper')
        )
      }
    </Container >

  );
};
