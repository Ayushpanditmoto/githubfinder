import React from "react";
import styled from "styled-components";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {BsFillSunFill} from "react-icons/bs";

function ThemeToggle ({toggleThemeHandler, theme}) {
    return(
        <ThemeButton onClick={()=>toggleThemeHandler()}>
            {theme === "light"?
            <BsFillSunFill/>
            :
            <BsFillMoonStarsFill/>
            }
        </ThemeButton>
    )
}

export default ThemeToggle;

const ThemeButton = styled.button`
height: 40px;
width: 40px;
color:  ${props=>props.theme.text};
border-radius: 50%;
box-shadow: inset 0 0 10px rgba(000,000,000,0.5);
padding: 0px;
background-color:  ${props=>props.theme.name === "light"?"white":"#635985"};
margin: 0px;
font-size: 15px;
`