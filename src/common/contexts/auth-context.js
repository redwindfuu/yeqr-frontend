import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import { AuthService } from 'src/common/services';

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  token: null,
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    return {
      ...state,
      ...(
        // if payload (user) is provided, then is authenticated
        action?.payload?.user
          ? ({
            isAuthenticated: true,
            isLoading: false,
            user: action?.payload?.user,
            token: action?.payload?.access
          })
          : ({
            isLoading: false
          })
      )
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {

    return {
      ...state,
      isAuthenticated: true,
      user: action?.payload?.user,
      token: action?.payload?.access
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      token: null
    };
  }
};

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;
    let userData = null;
    try {
      isAuthenticated = window.sessionStorage.getItem('authenticated') === 'true';
      userData = JSON.parse(window.sessionStorage.getItem('user-data'))
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: userData
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );


  const signIn = async (email, password) => {
    try {
      const data = await AuthService.signIn(email, password);
      console.log(data);
      window.sessionStorage.setItem('authenticated', 'true');
      window.sessionStorage.setItem('user-data', JSON.stringify(data.data));
      dispatch({
        type: HANDLERS.SIGN_IN,
        payload: data.data
      });
    } catch (err) {
      console.error(err);
      throw new Error(err?.response?.data?.message || "Something went wrong");
    }
  };

  const signUp = async (email, name, password) => {
    throw new Error('Sign up is not implemented');
  };

  const signOut = () => {
    dispatch({
      type: HANDLERS.SIGN_OUT
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
