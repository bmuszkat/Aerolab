import React from "react";
import {MainFooter,Policy,PolicyRow, Logo, GridSeparator} from "./Footer.styles";
import logoSrc from "../../assets/aerolab-logo.svg";
export const Footer = () => {
return (
    
    <MainFooter>      
        <GridSeparator/>
        <Policy>
          <PolicyRow>
            Crafted with love for  <Logo src={logoSrc} alt="logo" /> by Brian Muszkat
          </PolicyRow>         
        </Policy>      
    </MainFooter>
 );
};
