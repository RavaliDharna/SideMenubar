import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import TechieLogo from "./Favicon.png";
import Profile from "./Profile";
import Notifications from "./Notifications";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  top: 0;
  overflow: hidden;
  width: 100%;
  display: flex;
  position: fixed;
  flex-direction: row;
`;

const NavbarIcons = styled.div`
  display: flex;
`;

const NavProfile = styled.div`
  right: 20px;
  position: fixed;
  display: flex;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  position: fixed;
  display: flex;
  //justify-content: center;
  overflow-y: scroll;
  height: 100%;
  //margin-top: 80px;
  // left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  // width: ${({ sidebar }) => (sidebar ? "350px" : "200px")};
  transition: ${({ sidebar }) =>
    sidebar ? " 0.9s ease-in-out;" : " 0.9s ease-in-out;"};
  // z-index: 10;
`;
const NavBarProfile = styled.nav`
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  width: 150px;
  border-radius: 15px;
  text-align: center;
  font-family: arial;
  height: 150px;
  position: absolout;
  float: right;
  margin-right: 50px;
  margin-top: 80px;
  top: ${({ profile }) => (profile ? "0" : "-100%")};
  background-color: white;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState();

  const showSidebar = () => setSidebar();
  const showSidebarOpen = () => {
    setSidebar(true);
  };

  const showSidebarClose = () => {
    setSidebar(false);
  };

  const [profiles, setProfile] = useState(false);

  const showProfile = () => setProfile(!profiles);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <img
                src={TechieLogo}
                alt="TechieLogo"
                width="30px"
                padding="0px"
              />
            </NavIcon>
            {sidebar && (
              <h1 style={{ color: "gray", marginLeft: "20px" }}>App</h1>
            )}
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              item.test = sidebar;
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        <Nav style={{ marginLeft: sidebar ? "250px" : "80px" }}>
          <NavbarIcons>
            {showSidebar && !sidebar && (
              <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebarOpen} />
              </NavIcon>
            )}
            {showSidebar && sidebar && (
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebarClose} />
              </NavIcon>
            )}

            <NavIcon to="#">
              <AiIcons.AiOutlineMail />
            </NavIcon>
            <NavIcon to="#">
              <IoIcons.IoIosNotificationsOutline />
            </NavIcon>
          </NavbarIcons>
          <NavProfile>
            <NavIcon to="#">
              <AiIcons.AiOutlineSearch />
            </NavIcon>
            <NavIcon to="#">
              <CgIcons.CgProfile onClick={showProfile} />
            </NavIcon>
            <NavIcon to="#">
              <MdIcons.MdDashboard />
            </NavIcon>
          </NavProfile>
        </Nav>

        {profiles && (
          <NavBarProfile>
            <Profile />
          </NavBarProfile>
        )}
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
