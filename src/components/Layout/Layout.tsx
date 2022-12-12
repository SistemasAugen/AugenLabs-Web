import { useState, useEffect, memo } from "react";

import useStyles from "./Layout.styles";
import { Header, Footer } from "@components";

interface IProps {
  headerTitle?: string;
  children: JSX.Element | JSX.Element[];
}
const Layout = (props: IProps) => {
  const { children, headerTitle } = props;
  const classes = useStyles();
  const [headerIsSmall, setHeaderIsSmall] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderIsSmall(window.pageYOffset > 0);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header small={headerIsSmall} title={headerTitle} />
      <main
        className={[classes.main, headerIsSmall && classes.mainSmall].join(" ")}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default memo(Layout);
