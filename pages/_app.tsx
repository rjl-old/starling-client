import '../styles/globals.css'

import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import { useMemo, Fragment } from 'react';

// here you can add templates or providers etc
function MyApp({Component: NextPage, pageProps}) {
  const client = useMemo(() => new QueryClient(), []);
  const Layout = NextPage.Layout ?? Fragment;
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Layout>
        <NextPage {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp
