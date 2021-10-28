import React from 'react'
import {Col, Row} from "../css/settings/grid";
import {
    BodyStyled,
    BottleImg,
    Buble1Img,
    Buble2Img,
    Buble3Img,
    Buble4Img,
    Buble5Img, Buble6Img, Buble7Img, Buble8Img, DinPro, Gilroy, GilroyBold,
    GlobalStyle
} from "../css/css";
import bg3 from "../images/bg3.png";
import Header from "../components/Header";
import buble1 from '../images/buble1.png';
import buble2 from '../images/buble2.png';
import buble3 from '../images/buble3.png';
import buble4 from '../images/buble4.png';
import buble5 from '../images/buble5.png';
import buble6 from '../images/buble6.png';
import buble7 from '../images/buble7.png';
import buble8 from '../images/buble8.png';
import bottle from '../images/bottle.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import Footer from "../components/Footer";
import ImportantText from "../components/ImportantText";
import strelka from "../images/strelka.png";
import ButtonModal from "../components/ButtonModal";

const page2 = (props) => {
    return (
        <GlobalStyle bg={bg3}>
            <Header/>
            <BodyStyled>
                <BottleImg src={bottle}/>
                <Buble1Img src={buble1}/>
                <Buble2Img src={buble2}/>
                <Buble3Img src={buble3}/>
                <Buble4Img src={buble4}/>
                <Buble5Img src={buble5}/>
                <Buble6Img src={buble6}/>
                <Buble7Img src={buble7}/>
                <Buble8Img src={buble8}/>
                <Row justify_content={"center"} className={"mt_7"}>
                    <Col plSm={1} ml={9} mb_sm={0} mb={6}>
                        <DinPro>КЛЮЧЕВОЕ СООБЩЕНИЕ</DinPro><br/>
                        <Gilroy>BREND<GilroyBold>XY</GilroyBold></Gilroy>
                    </Col>
                </Row>
                <Row justify_content={"center"} className={"mt_7"}>
                    <Col col={6} sm={8}>
                        <ImportantText halfText={true} src={icon2} text={"Ehicula ipsum a arcu " +
                        "cursus vitae. Eu non diam phasellus " +
                        "vestibulum lorem sed risus ultricies"}/>
                    </Col>
                    <Col col={4} ml={4} plSm={0} sm={8} mtSmCol={6}>
                        <ImportantText src={icon1} text={"A arcu cursus vitae"}/>
                        <ButtonModal
                            margin_top={"30px"}
                            margin_bottom={"30px"}
                            img={strelka}
                            text={"Что дальше?"}
                        />
                    </Col>
                </Row>
            </BodyStyled>
            <Footer/>
        </GlobalStyle>
    )
}

export default page2