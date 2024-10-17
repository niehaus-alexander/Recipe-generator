import Navbar from "./Navbar";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const showNavbar = router.pathname !== "/";
  const showFooter = router.pathname !== "/";

  return (
    <div>
      {showNavbar && <Navbar />}
      <main className="bg-base-300">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
