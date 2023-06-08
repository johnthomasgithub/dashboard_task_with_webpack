import React from "react";

const Header = ({ selectedTab }: any) => {
  return (
    <div className="header-parent">
      <div className="heading">{selectedTab}</div>
      <div className="search-profile">
        <div className="search"></div>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Header;
