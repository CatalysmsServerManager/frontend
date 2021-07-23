import { render } from './render';
import { theme } from '@csmm/ui';

export async function cancelSubscriptionConfirmation(data: { name: string, undoCancelLink: string }): Promise<string> {
  const result = render({
    name: 'generic',
    data: {
      name: data.name,
      paragraph_1: `
      We are sorry to see you cancel your subscription.
      You have 30 days left until your data will be removed.
      `,
      paragraph_2: 'If this was by accident or if you changed your mind, click the button below.',
      button: {
        color: theme.colors.primary,
        href: data.undoCancelLink,
        text: 'Undo cancel'
      }
    }
  });
  return result;
}

export async function paymentConfirmation(data: { name: string, username: string }): Promise<string> {
  const result = render({
    name: 'generic',
    data: {
      name: data.name,
      paragraph_1: 'This email confirms your subscription purchase.',
      paragraph_2: `The invoice is attached to this email.
      You can also download a copy on the invoice overview located on your profile.
      Click the button below to see all your invoices.`,
      button: {
        color: theme.colors.info,
        href: `store.csmm.app/profile/${data.username}`,
        text: 'Your profile'
      }
    }
  });
  return result;
}

export async function instanceDeleted(data: { name: string }): Promise<string> {
  const result = render({
    name: 'generic',
    data: {
      name: data.name,
      paragraph_1: 'Your instance of CSMM has been deleted. Unfortunately this means your data has been removed and cannot be recovered. You can always resubscribe which will result in a new server.',
      paragraph_2: `If you have any issues or feedback. We'd love to hear it.
      Simply join our discord and explain your issue or give feedback in the support channel, and we will get right back to you.`,
      button: {
        color: theme.colors.primary,
        href: 'https://discordapp.com/invite/%45wy%44d%4E%41',
        text: 'Join our Discord'
      }
    }
  });
  return result;
}

export async function welcomeMessage(data: { name: string }): Promise<string> {
  const result = render({
    name: 'welcomeMessage',
    data: {
      name: data.name
    }
  });
  return result;
}
