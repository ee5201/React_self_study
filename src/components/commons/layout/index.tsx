import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = ["/section13/13-02-library-star"];

export default function LayOut(props) {
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: " flex" }}>
        <div style={{ width: "20%", backgroundColor: "orange" }}>사이드바</div>
        <div style={{ width: "79%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
