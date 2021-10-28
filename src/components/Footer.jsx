import React from 'react'
import {FooterPng, FooterStyled, HeaderStyled, HomeButton, HomeImg, HomeLine} from "../css/css";
import {Row} from "../css/settings/grid";
import FooterImg from '../images/Footer.png';

const Footer = (props) => {

    return (
        <FooterStyled>
            <Row col={3} col_md={6} col_sm={6} justify={"start"} align_items={"center"}>
                <FooterPng src={FooterImg}/>
            </Row>
        </FooterStyled>
    )
}

export default Footer