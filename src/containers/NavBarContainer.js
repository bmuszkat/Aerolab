import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { UserContext } from "../context/UserContext/UserContext";

export const NavbarContainer = () => {
  const { getUser, user, addPoints } = useContext(UserContext);
  const [sticky, setSticky] = useState("");


  const handleAddPoints = (points) => {
    addPoints(points);
  };

  const handleScroll = () => {
    const offset = window.scrollY || window.scrollTop;
    setSticky(
      offset > 80 ? "sticky" : offset < 80 && offset !== 0 ? "fixed" : ""
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    getUser();
  },[ user.points]);

   
  return (
    <>
      {user ? (
        <>
          <Navbar user={user} sticky={sticky} handleAddPoints={handleAddPoints}/>
        </>
      ) : null}
    </>
  );
};
