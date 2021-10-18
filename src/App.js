import { Carrousel } from "./components/Carrousel/Carrousel";
import React, { Fragment } from "react";
import { NavbarContainer } from "./containers/NavBarContainer";
import { ProductGridContainer } from "./containers/ProductGridContainer";
import AppContext from "./context/AppContext";
import { PageContent } from "./components/PageContent/PageContent";
import { Footer } from "./components/Footer/Footer";



export const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
       <AppContext>
        <NavbarContainer />
        <Fragment>
          <Carrousel></Carrousel>
          <PageContent>
            <ProductGridContainer />
          </PageContent>
        </Fragment>
        <Footer></Footer>
      </AppContext>
    </div>
  );
};
export default App;