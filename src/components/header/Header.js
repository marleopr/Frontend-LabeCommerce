import React, { Component } from 'react';
import styled from 'styled-components';
// import LogoShirtx from './../img/shirtx.png';
import LogoShirtx from './../img/shirtx-branco.png';
const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  grid-column: 1/-1;
  background-color: rgb(0,0,0);
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    width: 100vw;
  }
`

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  flex-basis: 225px;
  height: 100%;
  `
const ImagemLogo = styled.img`
  width: 100%;
  margin: 0 20px 0 50px;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 0;
    width: 100px;
    align-items: center;
    margin-left: 35vw;
  }
  `
  
export class Header extends Component {
  render() {
    return (
      <Cabecalho>

        <Box1>
          <ImagemLogo src={LogoShirtx} />
        </Box1>
      </Cabecalho>
    )
  }
}