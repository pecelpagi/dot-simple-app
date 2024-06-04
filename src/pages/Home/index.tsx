import { getApiKey } from '../../utils';
import { Navigate } from 'react-router-dom';
import PageContextProvider from './PageContextProvider';
import Content from './Content';

const Home = () => {
  if (!getApiKey()) {
    return <Navigate to="/auth" replace={true} />
  }

  return (
    <PageContextProvider>
      <Content />
    </PageContextProvider>
  )
}

export default Home;