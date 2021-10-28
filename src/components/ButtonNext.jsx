import React from 'react'
import {
    ButtonNextImg,
    ButtonNextWrapper, DinPro,
} from "../css/css";
import {Col, Row} from "../css/settings/grid";
import {NavLink} from "react-router-dom";

const ButtonNext = (props) => {

    return (
        <ButtonNextWrapper margin_left={props.margin_left} margin_top={props.margin_top}>
            <NavLink to={props.page}>
                <Row align_items={"center"}>
                    <Col col={2}><ButtonNextImg src={props.img}/></Col>
                    <Col ml={5} col={6} xl={6}><DinPro>{props.text}</DinPro></Col>
                </Row>
            </NavLink>
        </ButtonNextWrapper>
    )
}

export default ButtonNext