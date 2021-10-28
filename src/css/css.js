import styled, {keyframes} from 'styled-components';


export const HomeImg = styled.img`
  src: url(${props => props.src});
  width:41px;
  height: 35px;
   @media (max-width: 768px){
   height: 80%;
   }
`
export const ButtonNextImg = styled.img`
  src: url(${props => props.src});
  border-radius: 50%;
  background-color: rgb(23, 23, 23);
  width:20px;
  height: 20px;
  padding:15px;
  margin:8px;
`
export const FooterPng = styled.img`
  src: url(${props => props.src});
  z-index: 1; 
  height: 16px;
   @media (max-width: 768px){
   height: 14px;
   }
`

export const HomeLine = styled.div`
   border-right: 2px solid;
   height: 47px;
   @media (max-width: 768px){
    height: 37px;
   }
`
export const AlignCenter = styled.span`
 display: flex;
 align-items: center;
 white-space:  nowrap;
 @media (max-width: 768px){
 flex-wrap:wrap;
   }
`

export const ButtonNextWrapper = styled.button`
position:relative;
 z-index:0;
 background-color: rgb(255, 106, 159);
  border-radius:36px;
  border:none;
  height: 70px;
  margin-left: ${props => props.margin_left};
  margin-top: ${props => props.margin_top};
  margin-bottom: ${props => props.margin_bottom};
   @media (max-width: 576px){
   margin-top:20px;
   margin-left: 0px;
   }
`
export const ButtonSlider = styled.button`
border: 0;
background: none;
font-family: Font2;
font-size: 30px;
font-weight: 700;
`
export const Krug = styled.div`
 width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 50%;
  background: ${props => props.background};
  margin: 11px 5px 5px 5px ;
  
`

export const Circle = styled.p`
   font-family: Font4;
   font-size: 20px;
   color: rgb(39, 39, 39);
     line-height: 1.024;
    @media (max-width: 576px){
    font-size: 14px;
   }
`

export const DinPro = styled.p`
  font-family: Font2;
  color: rgb(36, 36, 36);
  font-size: 26px;
  margin:0!important;
    line-height: 1.073;
  text-align: left;
    @media (max-width: 576px){
    font-size: 20px;
   }
`

export const Number = styled.h5`
  color: #6BC2F2 !important;
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 30px;
  margin: 0px !important;
`

export const Gilroy = styled.p`
position: absolute;
  font-family: Font1;
  margin:0!important;
   font-size: 100px;
  color: rgb(23, 23, 23);
  line-height: 1.073;
   z-index:0;
    @media (max-width: 576px){
    font-size: 36px;
   }
    @media (min-width: 768px) and (max-width: 991.98px){
    font-size: 66px;
   }
`
export const GilroyBold = styled.span`
  font-family: Font3;
  margin:0!important;
   font-size: 100px;
  color: rgb(23, 23, 23);
  line-height: 1.073;
    @media (max-width: 576px){
    font-size: 36px;
   }
    @media(min-width: 768px) and (max-width: 991.98px){
    font-size: 66px;
   }
`

export const Layer4Copy = styled.img`
position: absolute;
width: 10%;
left: 88%;
top: 5%
`
export const Layer4ImgCopy = styled.img`
position: absolute;
width:10%;
left: 32%;
top: 82%
`
export const MoveLayer5img = keyframes`
0%{
left:73%;
top: 10%;
}
50%{
left: 74%;
top: 11%;
}
100%{
left:73%;
top: 10%;
}
`


export const Layer5img = styled.img`
position: absolute;
width: 7%;
left:73%;
top: 10%;
animation: ${MoveLayer5img};
animation-duration: 8s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: alternate-reverse;
`

export const MoveLayer8img = keyframes`
0%{
left:74%;
top: 20%;
}
50%{
left: 72%;
top: 16%;
}

70%{
left: 71%;
top: 16%;
}
`

export const Spin = keyframes` {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`

export const Layer8img = styled.img`
position: absolute;
width:11%;
left:74%;
top: 20%;
z-index: 10; 
animation-name: ${MoveLayer8img},${Spin};
animation-duration: 7s, 30s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: alternate-reverse;
`
export const PinkSperm1Img = styled.img`
position: absolute;
z-index:4;
width:58%;
left:40%;
top: 24%;
 @media (min-width: 1200px) {
top: 12%;
left:35%;
  }
`
export const PinkSpermImg = styled.img`
position: absolute;
width:27%;
left:0%;
top: 78%;
 @media (min-width: 1200px) {
width:17%;
left:0%;
top: 78%
  }
`
export const Layer7Img = styled.img`
z-index:0;
position: absolute;
width:10%;
left:0%;
top: 14%
`
export const MoveBaktiImg = keyframes`
0%{
left:3%;
top: 58%
}

100%{
left: 4%;
top: 62%;
}
`
export const BaktiImg = styled.img`
position: absolute;
width:6%;
left:3%;
top: 58%;
z-index:2;
animation-name: ${MoveBaktiImg};
animation-duration: 3s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: alternate-reverse;
`

export const MoveLayer4img = keyframes`
0%{
left:56%;
top: 65%;
width:19%;
}

20%{
left:56%;
top: 61%;
width:20%;
}

100%{
width:19%;
left: 55%;
top: 70%;
}`
export const MoveLayer4imgXL = keyframes`
0%{
left:56%;
top: 60%;
width:19%;
}

20%{
left:56%;
top: 61%;
width:20%;
}

100%{
width:19%;
left: 55%;
top: 60%;
}`

export const Layer4img = styled.img`
position: absolute;
width:19%;
left:56%;
top: 70%;
animation-name: ${MoveLayer4img};
animation-duration: 8s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: alternate;
 @media (min-width: 1200px) {
width:17%;
left:56%;
top: 65%;
animation-name: ${MoveLayer4imgXL};
animation-duration: 8s;
animation-timing-function: linear;
animation-iteration-count: infinite;
  }
`


export const MoveLayer3_5Img = keyframes`
0%{
left:34%;
top: 25%;
opacity:0;
}

100%{
left: 30%;
top: 24%;
opacity:1;
}`

export const MoveLayer3_5ImgXL = keyframes`
0%{
left: 54%;
top: 18%;
opacity:0;
}

100%{
left: 50%;
top: 19%;
opacity:1;
}
`
export const Layer3_5Img = styled.img`
position: absolute;
width:70%;
left: 30%;
top: 24%;
animation-name: ${MoveLayer3_5Img};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
 @media (min-width: 1200px) {
width:50%;
left: 50%;
top: 19%;
animation-name: ${MoveLayer3_5ImgXL};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
  }
`
export const MoveLayer3_3Img = keyframes`
0%{
left:34%;
top: 20%;
opacity:0;
}

100%{
left: 30%;
top: 19%;
opacity:1;
}`

export const MoveLayer3_3ImgXL = keyframes`
0%{
left: 54%;
top: 18%;
opacity:0;
}

100%{
left: 50%;
top: 19%;
opacity:1;
}
`
export const Layer3_3Img = styled.img`
position: absolute;
width:70%;
left: 30%;
top: 19%;
animation-name: ${MoveLayer3_3Img};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
 @media (min-width: 1200px) {
width:50%;
left: 50%;
top: 19%;
animation-name: ${MoveLayer3_3ImgXL};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
  }
`

export const MoveLayer3_1Img = keyframes`
0%{
left:34%;
top: 5%;
opacity:0;
}

100%{
left: 10%;
top: 4%;
opacity:1;
}`

export const MoveLayer3_1ImgXL = keyframes`
0%{
left: 44%;
top: -5%;
opacity:0;
}

100%{
left: 30%;
top: -6%;
opacity:1;
}
`
export const Layer3_1Img = styled.img`
position: absolute;
width:90%;
left: 10%;
top: 4%;
animation-name: ${MoveLayer3_1Img};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
 @media (min-width: 1200px) {
width:70%;
left: 30%;
top: -6%;
animation-name: ${MoveLayer3_1ImgXL};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
  }
`

export const MoveLayer3_2Img = keyframes`
0%{
left:24%;
top: 6%;
opacity:0;
}

100%{
left: 20%;
top: 5%;
opacity:1;
}`

export const MoveLayer3_2ImgXL = keyframes`
0%{
left: 50%;
top: 4%;
opacity:0;
}

100%{
left: 46%;
top: 5%;
opacity:1;
}
`
export const Layer3_2Img = styled.img`
position: absolute;
width:80%;
left: 20%;
top: 5%;
animation-name: ${MoveLayer3_2Img};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
 @media (min-width: 1200px) {
width:50%;
left: 46%;
top:4%;
animation-name: ${MoveLayer3_2ImgXL};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
  }
`

export const MoveLayer3_4Img = keyframes`
0%{
left:34%;
top: 3%;
opacity:0;
}

100%{
left: 10%;
top: 2%;
opacity:1;
}`

export const MoveLayer3_4ImgXL = keyframes`
0%{
left: 44%;
top: -5%;
opacity:0;
}

100%{
left: 30%;
top: -6%;
opacity:1;
}
`
export const Layer3_4Img = styled.img`
position: absolute;
width:90%;
left: 10%;
top: 2%;
animation-name: ${MoveLayer3_4Img};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
 @media (min-width: 1200px) {
width:70%;
left: 30%;
top: -6%;
animation-name: ${MoveLayer3_4ImgXL};
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: 1;
animation-direction: alternate;
  }
`

export const BottleImg = styled.img`
z-index:1;
position: absolute;
left: 0%;
width:28%;
bottom: 0%;

@media (min-width: 1200px) {
position: absolute;
width:20%;
left: 4%;
bottom: 0%;
  }
@media  (min-width: 576px) and (max-width: 768px) {
position: absolute;
width:20%;
left: 4%;
bottom: 0%;
  }
@media  (max-width: 576px)  {
display: none
  }
`

export const MoveBuble1Img = keyframes`
0%{
bottom: 76%;
left: 16%;
}

40%{
bottom: 73%;
left: 18%;
}
80%{
bottom: 75%;
left: 14%;
}
100%{
bottom: 76%;
left: 16%;
}
`
export const Buble1Img = styled.img`
z-index:1;
width:4%;
position: absolute;
bottom: 76%;
left: 16%;
animation-name: ${MoveBuble1Img};
animation-duration: 5s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: normal;
@media (min-width: 1200px) {
position: absolute;
width:4%;
left: 10%;
bottom: 0%;
  }
`

export const MoveBuble2Img = keyframes`
0%{
bottom: 60%;
left: 15%;
}
50%{
bottom: 57%;
left: 19%;
}
100%{
bottom: 60%;
left: 15%;
}
`
export const Buble2Img = styled.img`
z-index:1;
width:5%;
position: absolute;
bottom: 60%;
left: 15%;
animation-name: ${MoveBuble2Img};
animation-duration: 5s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: normal;
@media (min-width: 1200px) {
position: absolute;
width:4%;
left: 10%;
bottom: 0%;
  }
`
export const MoveBuble3Img = keyframes`
0%{
bottom: 60%;
left: 7%;
}
50%{
bottom: 58%;
left: 10%;
}
100%{
bottom: 60%;
left: 7%;
}
`
export const Buble3Img = styled.img`
z-index:0;
width:3%;
position: absolute;
bottom: 60%;
left: 7%;
animation-name: ${MoveBuble3Img};
animation-duration: 5s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: normal;
@media (min-width: 1200px) {
position: absolute;
width:4%;
left: 10%;
bottom: 0%;
  }
`
export const MoveBuble4Img = keyframes`
0%{
bottom: 45%;
left: 17%;
}
30%{
bottom: 40%;
left: 19%;
}
60%{
bottom: 45%;
left: 17%;
}
100%{
bottom: 40%;
left: 10%;
}
`
export const Buble4Img = styled.img`
z-index:0;
width:8%;
position: absolute;
bottom: 45%;
left: 17%;
animation-name: ${MoveBuble4Img};
animation-duration: 8s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: normal;
@media (min-width: 1200px) {
position: absolute;
width:4%;
left: 10%;
bottom: 0%;
  }
`
export const MoveBuble5Img = keyframes`
0%{
bottom: 35%;
left: 2%;
}
30%{
bottom: 33%;
left: 4%;
}
60%{
bottom: 33%;
left: 2%;
}
100%{
bottom: 35%;
left: 2%;
}
`
export const Buble5Img = styled.img`
z-index:1;
width:3%;
position: absolute;
bottom: 35%;
left: 2%;
animation-name: ${MoveBuble5Img};
animation-duration: 6s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction: normal;
@media (min-width: 1200px) {
position: absolute;
width:4%;
left: 10%;
bottom: 0%;
  }
`

export const MoveBuble6Img = keyframes`
0%{
bottom: 10%;
left: 2%;
}
40%{
bottom: 13%;
left: 4%;
}
80%{
bottom: 15%;
left: 2%;
}
100%{
bottom: 10%;
left: 2%;
}
`
export const Buble6Img = styled.img`
z-index:1;
width:6%;
position: absolute;
bottom: 15%;
left: 2%;
animation-name: ${MoveBuble6Img};
animation-duration: 6s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction:  alternate;
@media (min-width: 1200px) {
position: absolute;
width:4%;
left: 10%;
bottom: 0%;
  }
`
export const MoveBuble7Img = keyframes`
0%{
bottom: 8%;
left: 25%;
}
40%{
bottom: 5%;
left: 22%;
}
80%{
bottom: 8%;
left: 19%;
}
100%{
bottom: 8%;
left: 25%;
}
`
export const Buble7Img = styled.img`
z-index: 0;
width: 4%;
position: absolute;
bottom: 8%;
left: 25%;
animation-name: ${MoveBuble7Img};
animation-duration: 8s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction:  normal;
@media (min-width: 1200px) {
position: absolute;
width:4%;
left: 10%;
bottom: 0%;
  }
`
export const MoveBuble8Img = keyframes`
0%{
bottom: 0%;
left: 17%;
}
40%{
bottom: 5%;
left: 22%;
}
80%{
bottom: 0%;
left: 19%;
}
100%{
bottom: 0%;
left: 17%;
}
`
export const Buble8Img = styled.img`
z-index: 1;
width: 10%;
position: absolute;
bottom: 0%;
left: 17%;
animation-name: ${MoveBuble8Img};
animation-duration: 8s;
animation-timing-function: linear;
animation-iteration-count: infinite;
animation-direction:  normal;
@media (min-width: 1200px) {
position: absolute;
width:4%;
left: 10%;
bottom: 0%;
  }
`

export const ModalBase = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.45);
  position:fixed;
  z-index:0;
`

export const CloseButton = styled.button`
  padding: 5px;
  background: #FBFCFF;
  border: none;
  cursor: pointer;
`


export const GlobalStyle = styled.div`
    padding: 4% 5% 5% 8%;
    box-sizing: border-box;
    color: #262630;
    grid-template-areas: 
    "Header"
    "Content"
    "Footer"
  display: grid;
  height: 100vh;
  width: 100wh;
  background: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
   @media (min-width: 1200px){
   padding: 2% 5% 5% 18%;
   }
`

export const HeaderStyled = styled.div`
  position: relative:
  z-index:101;
  grid-area: Header;
`
export const FooterStyled = styled.div`
 position: absolute;
  bottom: 3%
`

export const BodyStyled = styled.div`
grid-area: Content;
`



