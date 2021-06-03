import { FC, useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, useValidationSchema } from '@csmm/ui';
import { httpService } from '../../services';
import { Container, ContentWrapper, ContentContainer, Content, Image } from './style';
import * as Sentry from '@sentry/react';
import { useSnackbar } from 'notistack';
import { useAuth, useUser } from 'hooks';
import { getRedirect } from 'helpers';
import * as yup from 'yup';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
}

export const OnBoarding: FC = () => {
  const { getSession } = useAuth();
  const { setUserData } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const validationSchema = useMemo(
    () =>
      yup.object({
        firstName: yup.string().required('Firstname is a required field.'),
        lastName: yup.string().required('Lastname is a required field.'),
        email: yup.string().email('Enter a valid email').required('Email is a required field.')
      }),
    []
  );
  const { control, handleSubmit, formState, reset } = useForm<IFormInputs>({ mode: 'onChange', resolver: useValidationSchema(validationSchema) });

  // check if a user tries to surf to this page while he has already filled in in this information.
  const checkIfUserHasInformation = async () => {
    const session = await getSession();
    if (session && session.firstName && session.lastName && session.email) {
      enqueueSnackbar('Your information has already been set before.', { variant: 'info' });
      navigate(getRedirect());
    }
  };
  useEffect(() => {
    checkIfUserHasInformation();
  }, []);

  const onSubmit: SubmitHandler<IFormInputs> = async ({ firstName, lastName, email }) => {
    if (!formState.isValid) {
      return;
    }
    setLoading(true);
    try {
      const response = await httpService.post('/user', { firstName: firstName, lastName: lastName, email: email });
      if (response.ok) {
        const newSession = await response.json();
        if (newSession && setUserData) {
          setUserData(newSession); // save new session data
          enqueueSnackbar('Information successfully saved!', { variant: 'success' });
          navigate('/billing/dashboard');
          return;
        }
      }
      reset(); // clear form
      enqueueSnackbar('Something went wrong. Please sign in again!', { variant: 'error' });
      navigate('/'); // if this is reached the user is probably not signed in.
      setLoading(false);
    } catch (e) {
      Sentry.captureMessage(e);
    }
  };

  return (
    <Container animate={{ opacity: 1 }}>
      <ContentWrapper>
        <ContentContainer>
          <Image>
            Thank <br /> you!
          </Image>
          <Content>
            <h2>You are almost there!</h2>
            <p>To automatically create and personalize your account we need a few more details.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                control={control}
                error={formState.errors.firstName}
                labelText="Firstname"
                loading={loading}
                name="firstName"
                placeholder=""
                required
              />
              <TextField
                control={control}
                error={formState.errors.lastName}
                labelText="Lastname"
                loading={loading}
                name="lastName"
                placeholder=""
                required
              />
              <TextField
                control={control}
                error={formState.errors.email}
                labelText="email"
                loading={loading}
                name="email"
                placeholder=""
                required
              />
              <Button
                disabled={!formState.isValid && !formState.isDirty}
                isLoading={loading}
                onClick={() => { /* dummy */ }}
                text="Lets get started"
                type="submit"
              />
            </form>
          </Content>
        </ContentContainer>
      </ContentWrapper>
    </Container>
  );
};
