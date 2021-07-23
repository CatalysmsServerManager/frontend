import { FC, useState, useMemo } from 'react';
import { Container, Image, ContentContainer, Content } from './style';
import { TextField, useValidationSchema, Button, REGEXPR_STEAM_API_KEY } from '@csmm/ui';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useSnackbar } from 'notistack';
import * as yup from 'yup';

import { httpService } from 'services';
import { AiOutlineRocket as DeployIcon } from 'react-icons/ai';

type FormFields = { steamApiKey: string; }

export const DeployServer: FC = () => {
  const { subscriptionId } = useParams();
  const [loading, setLoading] = useState(false);

  const validationSchema = useMemo(
    () =>
      yup.object({
        steamApiKey: yup.string().min(32).matches(REGEXPR_STEAM_API_KEY, 'This is not a valid steam api key.').required('SteamAPI key is required')
      }),
    []
  );

  const { control, handleSubmit, formState, reset } = useForm<FormFields>({ mode: 'onChange', resolver: useValidationSchema(validationSchema) });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const deploy: SubmitHandler<FormFields> = async ({ steamApiKey }) => {
    setLoading(true);
    if (!formState.isDirty && !formState.isValid) {
      enqueueSnackbar('The given Steam API key is not valid!', { variant: 'info' });
      return;
    };
    const response = await httpService.post('/subscription/deploy', { subscriptionId: subscriptionId, steamApiKey: steamApiKey });
    if (response.ok) {
      enqueueSnackbar('Server is successfully deploying! This might take a minute. In the meantime you can navigate to the CSMM platform.', { variant: 'info' });
      navigate('/store/dashboard');
      return;
    }
    enqueueSnackbar('Something went wrong deploying your server 🥺. Please try again later!', { variant: 'error' });
    setLoading(false);
    reset();
    //enqueueSnackbar(re, { variant: 'error' });
  };

  return (
    <>
      <Helmet>
        <title>CSMM | Deploy Server</title>
      </Helmet>
      <Container animate={{ opacity: 1 }}>
        <ContentContainer>
          <Image>Have <br /> Fun</Image>
          <Content>
            <h2>Deploy your server!</h2>
            <p>
              To automatically deploy your server we need your Steam API key.
              Go to <a href="https://steamcommunity.com/dev/apikey" rel="noopener noreferrer" target="_blank" >Valve API key page</a>, register a key and copy the key to the field below. If you created a Valve API key in the past, use this existing key.
            </p>
            <form onSubmit={handleSubmit(deploy)}>
              <TextField
                control={control}
                error={formState.errors.steamApiKey}
                labelText="Steam Api Key"
                name="steamApiKey"
                placeholder=""
              />
              <Button
                disabled={!formState.isValid && !formState.isDirty}
                icon={<DeployIcon size={22} />}
                isLoading={loading}
                onClick={() => { /* dummy */ }}
                text="Deploy Server"
                type="submit"
              />
            </form>
          </Content>
        </ContentContainer>
      </Container>
    </>
  );
};
