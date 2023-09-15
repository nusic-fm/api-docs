import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import { explorerPlugin } from '@graphiql/plugin-explorer';
import '@graphiql/plugin-explorer/dist/style.css';


const App = () => {

  const fetcher = createGraphiQLFetcher({
    url: import.meta.env.VITE_GRAPHQL_SERVER
  });
  const explorer = explorerPlugin({});

  return <div style={{height: '100vh', width: '100vw'}}><GraphiQL fetcher={fetcher} plugins={[explorer]} /></div>
}

export default App;