import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      <div>
        =======================여기는 _app.js 컴포넌트 시작부분 입니다.
        ==================
      </div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>
        =======================여기는 _app.js 컴포넌트 마지막부분 입니다.
        ==================
      </div>
    </div>
  );
}
