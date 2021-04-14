import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { HomeRounded, Telegram } from '@material-ui/icons'
import { NavLink, withRouter } from 'react-router-dom'
import resumeData from '../../utils/resumeData'
import CustomButton from '../Button/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css'


const Header = (props) => {
    const pathName = props?.location?.pathName;


    return (
        <Navbar expand="lg" sticky='top' className='header'>
            <Nav.Link as={NavLink} to="/" className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header_left'>
                    {/* Resume Link */}
                    <Nav.Link as={NavLink} to="/" className={pathName === "/" ? "header_link_active" : "header_link"}>
                        Curriculum
                    </Nav.Link>
                    {/* Portfolio */}
                    <Nav.Link as={NavLink} to="/portfolio" className={pathName === "/portfolio" ? "header_link_active" : "header_link"}>
                        Portafolio
                    </Nav.Link>
                    {/* Contacto */}
                    <Nav.Link as={NavLink} to="/contacto" className={pathName === "/contacto" ? "header_link_active" : "header_link"}>
                        Contacto
                    </Nav.Link>
                </Nav>

                <div className="header_right">
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].link} target="blank">
                            {resumeData.socials[key].icon}
                        </a>
                    ))}
                    {/* <CustomButton text={'Hire Me'} icon={<Telegram/>} className='Nav_button'/> */}
                    <Nav.Link as={NavLink} to="/contacto">
                        <CustomButton text={'Contactame'} icon={<Telegram />} />
                    </Nav.Link>
                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)
