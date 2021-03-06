import React, {useEffect, useState} from 'react';
import {Col, Row} from "../css/settings/grid";
import {ButtonSlider, Circle, CloseButton, DinPro, Gilroy, GilroyBold, Krug, ModalBase, Number} from "../css/css";

const ModalWindow = ({modalActive, setModalActive, children}) => {

    const [selected, setSelected] = useState(0)
    const [colorCircle, setColorCircle] = useState("rgb(252, 109, 169)")
    const [colorCircle2, setColorCircle2] = useState("none")
    let next = () => {
        setSelected(1)
    }
    let preview = () => {
        setSelected(0)
    }
    useEffect(() => {
            selected == 1 ? setColorCircle("none") || setColorCircle2("rgb(252, 109, 169)")
                : setColorCircle("rgb(252, 109, 169)") || setColorCircle2("none")
        }, [selected]
    )

    return (
        <>
            {modalActive ? (
                <ModalBase
                    onClick={() => setModalActive(prev => !prev)}
                >
                    <Col
                        border={"1px solid white"}
                        padding={1}
                        max_width={"750px"}
                        background={" rgb(255, 255, 255)"}
                        border_radius={"30px"}
                        onClick={e => e.stopPropagation()}
                    >
                        <Row align_items={"center"}>
                            <Col col={11} sm={11}>

                            </Col>
                            <Col col={1} sm={1}>
                                <CloseButton onClick={() => setModalActive(prev => !prev)}
                                >
                                    <svg width="16" height="16" viewBox="0 0 23 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1999 11.4984L22.4336 3.28264C22.7942 2.92202 22.9967 2.43292 22.9967 1.92292C22.9967 1.41293 22.7942 0.92383 22.4336 0.563212C22.073 0.202593 21.584 0 21.0741 0C20.5642 0 20.0751 0.202593 19.7146 0.563212L11.5 8.79809L3.28544 0.563212C2.92487 0.202593 2.43584 -3.79973e-09 1.92592 0C1.416 3.79973e-09 0.926966 0.202593 0.566399 0.563212C0.205832 0.92383 0.00326783 1.41293 0.00326783 1.92292C0.00326782 2.43292 0.205832 2.92202 0.566399 3.28264L8.80011 11.4984L0.566399 19.7141C0.386927 19.8921 0.244476 20.1039 0.147263 20.3373C0.0500504 20.5707 0 20.821 0 21.0738C0 21.3266 0.0500504 21.5769 0.147263 21.8103C0.244476 22.0437 0.386927 22.2555 0.566399 22.4335C0.744406 22.613 0.956187 22.7555 1.18953 22.8527C1.42286 22.9499 1.67314 23 1.92592 23C2.1787 23 2.42897 22.9499 2.66231 22.8527C2.89565 22.7555 3.10743 22.613 3.28544 22.4335L11.5 14.1986L19.7146 22.4335C19.8926 22.613 20.1043 22.7555 20.3377 22.8527C20.571 22.9499 20.8213 23 21.0741 23C21.3269 23 21.5771 22.9499 21.8105 22.8527C22.0438 22.7555 22.2556 22.613 22.4336 22.4335C22.6131 22.2555 22.7555 22.0437 22.8527 21.8103C22.95 21.5769 23 21.3266 23 21.0738C23 20.821 22.95 20.5707 22.8527 20.3373C22.7555 20.1039 22.6131 19.8921 22.4336 19.7141L14.1999 11.4984Z"
                                            fill="#3D3D4E"/>
                                    </svg>
                                </CloseButton>
                            </Col>

                        </Row>
                        <Row>
                            <Col  ml_lg={7} height={"500px"} heightSm={"400px"} padding={1} p_l={4} p_l_sm={0}>
                                {children}

                                <DinPro>????????????????????????</DinPro>
                                <Gilroy>BREND<GilroyBold>XY</GilroyBold></Gilroy>


                                <Row mt={8} mtSmRow={4} >
                                    {selected === 0 ?
                                        <>
                                            <div>
                                                <Number>1</Number>
                                                <DinPro>Lorem ipsum dolor sit amet, consectetur adipiscing elit</DinPro>
                                            </div>
                                            <div>
                                                <Number>2</Number>
                                                <DinPro>Faucibus pulvinar elementum integer enim</DinPro>
                                            </div>
                                            <div>
                                                <Number>3</Number>
                                                <DinPro>Faucibus pulvinar elementum integer enim</DinPro>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div>
                                                <Number>4</Number>
                                                <DinPro>Mi bibendum neque egestas congue quisque
                                                    egestas diam</DinPro>
                                            </div>
                                            <div>
                                                <Number>5</Number>
                                                <DinPro>Venenatis lectus magna fringilla urna</DinPro>
                                            </div>
                                            <div>
                                                <Number>6</Number>
                                                <DinPro>Venenatis lectus magna fringilla urna</DinPro>
                                            </div>
                                        </>
                                    }
                                </Row>

                                <Row mt={2} align_items={"center"}>

                                    <ButtonSlider onClick={() => {
                                        preview();
                                    }}>&lt;</ButtonSlider>
                                    <Krug background={colorCircle}/>
                                    <Krug background={colorCircle2}/>
                                    <ButtonSlider onClick={() => {
                                        next();
                                    }}>&gt;</ButtonSlider>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </ModalBase>
            ) : null
            }
        </>
    )
}

export default ModalWindow;

