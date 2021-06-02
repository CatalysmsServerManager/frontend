import { FC, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { styled, TextField } from '@csmm/ui';
import { httpService } from '../services';
import { UserContext } from '../context';
import { Button } from '@csmm/ui';
import { setCustomErrorMessages } from '../helpers';
import * as Sentry from '@sentry/react';
import Joi from 'joi';
import { useSnackbar } from 'notistack';

const schema = Joi.object({
  firstName: Joi
    .string()
    .required()
    .error((errors) => (setCustomErrorMessages('First name', errors))),
  lastName: Joi
    .string()
    .required()
    .error((errors) => (setCustomErrorMessages('Last name', errors))),
  email: Joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .error((errors) => (setCustomErrorMessages('Email', errors)))
});

export const Container = styled(motion.div)`
  width: 100%;
  opacity:0;
  height: 100vh;
  padding: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 15px;
  }
  p {
    color: white;
    font-size: 1.5rem;
    font-size: 500;
    margin-bottom: 50px;
    text-align: center;
  }
`;

const ContentContainer = styled.div`
  width:60%;
  margin: 0 auto;
`;

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
}

export const MoreInformation: FC = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { control, handleSubmit, formState, reset } = useForm<IFormInputs>({ mode: 'onChange', resolver: joiResolver(schema) });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // check if a user tries to surf to this page while he has already filled in in this information.
  useEffect(() => {
    if (userData?.firstName && userData?.lastName && userData?.email) {
      enqueueSnackbar('Your information has already been set before.', { variant: 'info' });
      navigate('/billing/dashboard');
    }
  }, []);

  const onSubmit: SubmitHandler<IFormInputs> = async ({ firstName, lastName, email }) => {
    if (!formState.isValid) {
      return;
    }
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
    } catch (e) {
      Sentry.captureMessage(e);
    }
  };

  return (
    <Container
      animate={{ opacity: 1 }}
    >
      <ContentContainer>
        <h1>You are almost there!</h1>
        <p>To automatically create and personalize your account we need a few more details.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField control={control} error={formState.errors.firstName} labelText="" name="firstName" placeholder="First name" />
          <TextField control={control} error={formState.errors.lastName} labelText="" name="lastName" placeholder="Last name" />
          <TextField control={control} error={formState.errors.email} labelText="" name="email" placeholder="Email address" />
          <Button
            disabled={!formState.isValid && !formState.isDirty}
            onClick={() => { /* dummy */ }}
            text="LETSSS GETT ITTT!"
            type="submit"
          />
        </form>
      </ContentContainer>
    </Container>
  );
};
