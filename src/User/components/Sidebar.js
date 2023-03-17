import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink,Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Sidebar.css"
// import img from '../../public/images/imgProfile.jpg'


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding:10px
 
 

`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className='container-fluid ' >
      <div className='row header'>
        <div className='col-sm-4'>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>

        </SidebarNav>
      </IconContext.Provider>
      </div>
      <div className='col-sm-5 all'>
        <div className='row'>
          <div className='col-sm-3'>
        <NavLink className='headertext' to="/all_courses" style={{textDecoration:"none" ,color:"white"}}> All Courses</NavLink></div>
        <div  className='col-sm-3 ms-5'> <NavLink to="/my_courses" className='headertext' style={{textDecoration:"none" ,color:"white"}}> My Courses</NavLink></div></div>

      </div>
      <div className='col-sm-3'>
     
     <div className='row'>
     <div className=' im '>
  
 <p className='text-light user'>Username</p>
       <img src="/images/imgProfile.jpg" className='img1'/>
               </div>
     </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
