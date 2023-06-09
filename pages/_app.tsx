import type { AppProps } from "next/app";
import LayOut from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>
        =======================여기는 _app.js 컴포넌트 시작부분 입니다.
        ==================
      </div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles}/>
          <LayOut>
            <Component />
          </LayOut>
        </>
      </ApolloSetting>

      <div>
        =======================여기는 _app.js 컴포넌트 마지막부분 입니다.
        ==================
      </div>
    </div>
  );
}
