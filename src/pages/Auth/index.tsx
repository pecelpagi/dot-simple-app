import React from 'react'
import PageContextProvider from './PageContextProvider';
import Form from './Form';
import { getApiKey } from '../../utils';
import { Navigate } from 'react-router-dom';

const Auth = () => {
  if (getApiKey()) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <PageContextProvider>
      <Form />
    </PageContextProvider>
  )
}

export default Auth;