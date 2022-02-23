import '../styles/globals.css'

import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import { useMemo } from 'react';

// here you can add templates or providers etc
function MyApp({Component: NextPage, pageProps}) {
  const client = useMemo(() => new QueryClient(), []);
  return <QueryClientProvider client={client}><ReactQueryDevtools /><NextPage {...pageProps} /></QueryClientProvider>
}

export default MyApp
