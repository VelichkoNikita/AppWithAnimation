import React from 'react'
import { Col, Row } from "../css/settings/grid";
import {
    AlignCenter,
    BodyStyled, DinPro,
    GlobalStyle,
    Layer3_1Img,
    Layer3_2Img,
    Layer3_3Img,
    Layer3_4Img,
    Layer3_5Img,
} from "../css/css";
import Header from "../components/Header"
import bg2 from '../images/bg2.png'
import Layer3_5 from '../images/Layer3_5.png';
import Layer3_4 from '../images/Layer3_4.png';
import Layer3_3 from '../images/Layer3_3.png';
import Layer3_2 from '../images/Layer3_2.png';
import Layer3_1 from '../images/Layer3_1.png';
import Footer from "../components/Footer";
import ScrollBlock from "../components/ScrollBlock";
import ButtonNext from "../components/ButtonNext";
import strelka from "../images/strelka.png";

const page1 = (props) => {
    return (
        <GlobalStyle bg={bg2}>
            <Header />
            <BodyStyled className={"mt_6"}>
                <Layer3_5Img src={Layer3_5} />
                <Layer3_3Img src={Layer3_3} />
                <Layer3_1Img src={Layer3_1} />
                <Layer3_2Img src={Layer3_2} />
                <Layer3_4Img src={Layer3_4} />
                <Row justify_content={"start"} >
                    <Col col={9}>
                        <Row>
                            <Col xl={3}>
                                <DinPro>ТЕКСТ<br />СООБЩЕНИЯ</DinPro><br />
                            </Col>
                            <Col>
                                <ButtonNext
                                    img={strelka}
                                    text={"Дальше"}
                                    page={"/page2"} />
                            </Col></Row>
                        <ScrollBlock />
                        <Row justify_content={"start"}>
                        </Row>
                    </Col>

                </Row>
            </BodyStyled>
            <Footer />
        </GlobalStyle>
    )
}

export default page1