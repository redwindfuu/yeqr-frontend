import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import 'simplebar-react/dist/simplebar.min.css';
import { AuthConsumer, AuthProvider } from 'src/common/contexts/auth-context';
import { useNProgress } from 'src/common/hooks/use-nprogress';
import { setupAuthAxiosClient } from 'src/common/utils/axios/auth-axios';
import { createEmotionCache } from 'src/common/utils/create-emotion-cache';
import { persistor, store } from 'src/libs/redux/store';
import { createTheme } from 'src/theme';

import 'src/libs/i18n';


const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  setupAuthAxiosClient(store);


  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          YE QR frontend
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <Provider store={store} >
            <PersistGate persistor={persistor}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthConsumer>
                  {
                    (auth) => auth.isLoading
                      ? <SplashScreen />
                      : getLayout(<Component {...pageProps} />)
                  }
                </AuthConsumer>
              </ThemeProvider>
            </PersistGate>
          </Provider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
