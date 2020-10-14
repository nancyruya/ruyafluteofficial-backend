import React from "react";
import { Navbar } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const Footerbar = () => {
  return (
    <Navbar bg="light">
      <div className="socialIcon">
        <SocialIcon
          url="https://www.instagram.com/ruyaflute/"
          style={{ height: 50, width: 50 }}
          bgColor="black"
        />
        <SocialIcon
          url="https://github.com/nancyruya"
          style={{ height: 50, width: 50 }}
          bgColor="black"
        />
        <SocialIcon
          url="https://www.youtube.com/user/nancyruya"
          style={{ height: 50, width: 50 }}
          bgColor="black"
        />
        <SocialIcon
          url="mailto: juliac1741@gmail.com"
          style={{ height: 50, width: 50 }}
          bgColor="black"
        />
      </div>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        Copyright © 2020 <a href="https://github.com/nancyruya/ruyafluteofficial">RuyaFlute</a>. All rights reserved.
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footerbar;
