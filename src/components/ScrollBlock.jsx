import React from 'react'
import {Col, Row} from "../css/settings/grid";
import {DinPro} from "../css/css";
import OnHoverScrollContainer from "../components/CustomScrollDiv";


const ScrollBlock = (props) => {

    return (
        <Row justify_content={"start"} align_items={"center"} className={"mt_3"}>
            <OnHoverScrollContainer>
                <Col
                    ml={6}
                    plSm={2}
                    col={8}
                    sm={10}
                    lg={8}
                    background={"rgb(255, 255, 255)"}
                    border_radius={"40px"}
                    shadow_col={"5.446px 8.387px 232.5px 17.5px rgba(157, 185, 198, 0.39)"}
                    padding={3}
                    z_index={1}
                >
                    <DinPro>
                        <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Phasellus
                        tortor neque, vehicula sit amet odio quis, dictum tristique lorem.
                        Phasellus mattis, nibh in volutpat consequat, diam lectus tristique
                        purus, vitae mattis enim metus sed nulla. Sed et risus blandit,
                        posuere arcu eu, bibendum eros. In hac habitasse platea dictumst.
                        Vestibulum id elementum mi, ac bibendum ipsum. Phasellus venenatis
                        enim nec arcu ullamcorper, eu vulputate augue imperdiet. Nulla
                        sagittis egestas mi non mollis. Aenean dapibus in nulla eu elementum.
                        Nam non nisl malesuada, suscipit massa euismod, pretium ligula. Nulla
                        in porta nisi.
                        Fusce sit amet nisi ultricies, varius magna semper, semper mi. Ut
                        faucibus, dolor non rutrum dictum, ipsum urna aliquam augue, non
                        egestas odio mi vitae purus. Etiam volutpat ut magna ut tristique.
                        Vivamus a tempor ex, eu egestas lorem. Nullam pulvinar, sem sit amet
                        scelerisque porttitor, metus elit eleifend libero, vel tincidunt nibh
                        nisi sed eros. Ut quis quam ut nulla commodo commodo. Morbi ac felis
                        id ligula maximus iaculis. Nunc malesuada placerat purus eget
                        consequat. In hac habitasse platea dictumst. Quisque ullamcorper turpis ultrices
                        posuere feugiat. Etiam vehicula orci ac ipsum tincidunt, non ornare
                        leo tristique. Nullam eleifend massa mollis elit consectetur
                        fermentum. In congue efficitur odio, nec imperdiet elit volutpat sed.
                        Mauris congue ut mauris non semper. Duis ultrices elit mauris, eu
                        mollis lacus ullamcorper et. Donec vel libero enim. Sed placerat felis
                        lectus, sit amet posuere libero laoreet sed. Integer vitae luctus
                        magna. Phasellus et diam ipsum. Vestibulum tempor dictum ante, quis
                        varius dolor mattis non. Aliquam tempus, dolor dignissim posuere
                        tincidunt, leo massa pulvinar velit, nec sollicitudin arcu arcu ac
                        nulla. Aenean ipsum felis, iaculis vel libero ac, tincidunt molestie
                        elit. Aliquam eu nunc nunc. Integer at ante a erat tincidunt
                        imperdiet. Morbi augue magna, fermentum id posuere ultrices, venenatis
                        a tortor. Donec vel erat quis nisi vehicula cursus. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Aliquam imperdiet lacinia nibh,
                        ut semper erat vulputate sed. Phasellus mauris felis, ornare sit amet
                        aliquam nec, maximus nec velit. Donec vel mollis magna, id feugiat
                        leo. Nulla interdum interdum est, a maximus dui blandit in. Maecenas
                        et lacus ac justo placerat imperdiet. Cras sit amet sapien ac mi
                        faucibus dignissim id eu libero. Donec porttitor interdum dui quis
                        iaculis. Quisque odio massa, rhoncus sit amet nisl luctus, dictum
                        finibus velit. Sed eu est ac nunc luctus viverra. Nunc placerat
                        scelerisque hendrerit. Sed malesuada mauris orci, convallis gravida
                        felis tempus ut. Sed porttitor risus vel ligula volutpat egestas
                        dictum ut lectus. Cras mattis posuere tellus, egestas egestas orci
                        accumsan et. Sed varius, risus eleifend scelerisque lobortis, ante
                        ligula rutrum tellus, a fermentum libero nulla id nisl. Nulla eros
                        elit, convallis in justo quis, fermentum molestie leo. Pellentesque
                        pulvinar tortor sit amet gravida euismod. Etiam id scelerisque ligula.
                        Donec eu dui at leo placerat facilisis quis quis dui. Donec aliquam
                        lacinia lacus, vitae dictum velit vulputate eu.
                    </DinPro>
                </Col>
            </OnHoverScrollContainer>
        </Row>
    )
}

export default ScrollBlock