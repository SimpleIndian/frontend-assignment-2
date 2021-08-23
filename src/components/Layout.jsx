import Footer from "./Footer";
import Header from "./Header";
import Social from "./Social";

const Layout = ({ children }) => {
  return (
    <>
      <Social className="fixed z-20 top-2/3 left-5"></Social>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
