import React, {useState} from 'react'
import {
    ButtonNextImg,
    ButtonNextWrapper, DinPro,
} from "../css/css";
import {Col, Row} from "../css/settings/grid";
import ModalWindow from "./ModalWindow";

const ButtonModal = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const openModalVid = () => {
        setModalActive(prev => !prev)
    }

    return (
        <>
            <ButtonNextWrapper margin_top={props.margin_top} margin_bottom={props.margin_bottom} onClick={() => {
                openModalVid(true)
            }}>

                <Row align_items={"center"}>
                    <Col col={2}><ButtonNextImg src={props.img}/></Col>
                    <Col ml={5} col={6} xl={6}><DinPro>{props.text}</DinPro></Col>
                </Row>

            </ButtonNextWrapper>

            <ModalWindow modalActive={modalActive} setModalActive={setModalActive}>
                <Row align_items={"center"}>
                    {/*children*/}
                </Row>
            </ModalWindow>
        </>
    )
}

export default ButtonModal