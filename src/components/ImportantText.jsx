import React from 'react';
import s from "./ImportantText.module.css";
import {Col, Row} from "../css/settings/grid";
import {DinPro} from "../css/css";


const ImportantText = (props) => {

    return (

        <Row className={props.indent} justify={props.position}>
            <Col>
                <div className={s.flex}>
                    <img src={props.src} className={s.circle}/>
                </div>
                {props.halfText ?
                    <Row justify_content={"end"}>
                        <Col></Col>
                        <Col xl={12} lg={9} sm={12}>
                            <DinPro className={s.stayle}>{props.text}</DinPro>
                        </Col>
                    </Row>
                    :
                    <DinPro className={s.stayle}>{props.text}</DinPro>}
            </Col>
        </Row>
    )
}

export default ImportantText