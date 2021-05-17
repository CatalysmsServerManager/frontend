import { FC, useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { httpService } from '../services';
import { TextField, Button } from '../components';
import * as Joi from 'joi';
import { useSnackbar } from 'notistack';
import { setCustomErrorMessages } from '../helpers';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${({ theme }) => theme.s};
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 800px;
      h1 {
        color: white;
        font-weight: 800;
        text-align: center;
        margin-bottom: 25px;
        font-size: 4rem;
      }
      p.info {
        color: white;
        font-weight:600;
        font-size: 1.2rem;
        margin-bottom: 30px;
        text-align: center;

        a {
          font-weight: 800;
          color: white;
          text-decoration: underline;
        }
      }
    }
`;

// steam api key
const schema = Joi.object({
  steamApiKey: Joi.string()
    .min(32)
    .regex(/\w{32}/)
    .required()
    .error((errors) => (setCustomErrorMessages('Email', errors)))
});

interface IFormInputs {
  steamApiKey: string;
}

export const DeployServer: FC = () => {
  const { subscriptionId } = useParams();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, formState, reset } = useForm<IFormInputs>({ mode: 'onChange', resolver: joiResolver(schema) });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const deploy: SubmitHandler<IFormInputs> = async ({ steamApiKey }) => {
    setLoading(true);
    if (!formState.isDirty && !formState.isValid) {
      enqueueSnackbar('The given Steam API key is not valid!', { variant: 'info' });
      return;
    };
    const response = await httpService.post('/subscription/deploy', { subscriptionId: subscriptionId, steamApiKey: steamApiKey });
    if (response.ok) {
      enqueueSnackbar('Server is successfully deploying! This might take a minute. In the meantime you can navigate to the CSMM platform.', { variant: 'info' });
      navigate('/billing/dashboard');
      return;
    }
    enqueueSnackbar('Something went wrong deploying your server 🥺. Please try again later!', { variant: 'error' });
    setLoading(false);
    reset();
    //enqueueSnackbar(re, { variant: 'error' });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(deploy)}>
        <h1>Deploy your server!</h1>
        <p className='info'>
          To automatically deploy your server we need your Steam API key.
          Go to <a href='https://steamcommunity.com/dev/apikey' rel='noopener noreferrer' target='_blank' >Valve API key page</a>, register a key and copy the key to the field below. If you created a Valve API key in the past, use this existing key.
        </p>
        <TextField error={errors.steamApiKey} labelText='' name='steamApiKey' placeholder='Steam API key' ref={register} />
        <br />
        <Button active={formState.isValid && formState.isDirty} isLoading={loading} type='submit'>deploy server</Button>
      </form>
    </Container>
  );
};
