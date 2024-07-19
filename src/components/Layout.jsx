import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const showNavbar = router.pathname !== "/";

  return (
    <div>
      {showNavbar && <Navbar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
