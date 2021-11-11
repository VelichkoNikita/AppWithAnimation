import React from 'react'
import {Circle, HeaderStyled, HomeImg, HomeLine} from "../css/css";
import {Col, Row} from "../css/settings/grid";
import {Link} from "react-router-dom";
import Home from '../images/Home.png';

const Header = (props) => {

    return (
        <HeaderStyled>
            <Row col={3} col_md={6} col_sm={6} justify={"start"} align_items={"center"}>
                <Col z_index={2} mr={2} grow={false}>
                    <Link to={'/StartPage'}>
                        <HomeImg src={Home}/>
                    </Link>
                </Col>
                <HomeLine/>
                <Col z_index={2}  ml={2}>
                    <Circle>PROJECT</Circle>
                </Col>
            </Row>
        </HeaderStyled>
    )
}

export default Header