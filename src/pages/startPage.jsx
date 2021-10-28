import React from 'react'
import {Col, Row} from "../css/settings/grid";
import {
    AlignCenter,
    BaktiImg,
    BodyStyled, DinPro, Gilroy, GilroyBold,
    GlobalStyle,
    Layer4Copy,
    Layer4img,
    Layer4ImgCopy,
    Layer5img, Layer7Img,
    Layer8img,
    PinkSperm1Img, PinkSpermImg
} from "../css/css";
import Header from "../components/Header"
import Layer4copy2 from '../images/Layer4copy2.png';
import Layer4CopyImg from '../images/Layer4copy.png';
import PinkSperm from '../images/pink_sperm.png';
import Bakti from '../images/bakti_1.png';
import Layer7 from '../images/Layer7.png';
import Layer5 from '../images/Layer5.png';
import Layer8 from '../images/Layer8.png';
import Layer4 from '../images/Layer_4.png';
import PinkSperm1 from '../images/pink_sperm_1.png';
import strelka from '../images/strelka.png';
import bg from '../images/bg.png'
import Footer from "../components/Footer";
import ButtonNext from "../components/ButtonNext";

const startPage = (props) => {
    return (
        <GlobalStyle bg={bg}>
            <Header/>
            <BodyStyled className={"mt_7"}>
                <Layer4Copy src={Layer4copy2}/>
                <Layer5img src={Layer5}/>
                <Layer8img src={Layer8}/>
                <PinkSperm1Img src={PinkSperm1}/>
                <Layer4img src={Layer4}/>
                <Layer4ImgCopy src={Layer4CopyImg}/>
                <PinkSpermImg src={PinkSperm}/>
                <BaktiImg src={Bakti}/>
                <Layer7Img src={Layer7}/>
                <Row justify_content={"center"}>
                    <Col>
                        <DinPro>ПРИВЕТ,</DinPro><br/>
                        <Gilroy> ЭТО <GilroyBold>НЕ</GilroyBold><br/>
                            КОММЕРЧЕСКОЕ<br/>
                            <AlignCenter>
                                ЗАДАНИЕ
                                <ButtonNext
                                    margin_left={"25px"}
                                    img={strelka}
                                    text={"Что дальше?"}
                                    page={"/page1"}/>
                            </AlignCenter>
                        </Gilroy>
                    </Col>
                </Row>
            </BodyStyled>
            <Footer/>
        </GlobalStyle>
    )
}

export default startPage