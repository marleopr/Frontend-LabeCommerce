import React, { Component } from 'react';
import styled from 'styled-components';
import instagram from "./../img/instagram.png";
import facebook from "./../img/facebook.png";
import twitter from "./../img/twitter.png";
import youtube from "./../img/youtube.png";

const Rodape = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/-1;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    width: 100vw;
  }
  `

const ImagemRedeSocial = styled.img`
  width: 25px;
  margin: 0 10px 0 5px;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    
    display: flex;
    flex-direction: row;
        /* align-items: unset; */
        width: 100%;
      
  }
  
  :hover{
    box-shadow: 1px 1px 5px white;
    cursor:pointer
  }
  `

const TextoLogoGeral = styled.h4`
  display: flex;
  align-items: center;
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
  font-family: 'Comfortaa', cursive;
  margin: 0 0 0 20px;
  height: 50px;
  
  `

const TextoLogo1 = styled.h4`
  background-color: white;
  padding: 5px 0 5px 5px;
  border-radius: 10px;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
   display: none;
  }
  `

const TextoLogo2 = styled.h4`
  margin: 0 0 0 8px;
  color: #a7a9ac;
  font-family: 'Courier New', Courier, monospace;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    font-size: 12px;
    margin-right: 0px;
  }
  `

const TextoCentral = styled.p`
color: #a7a9ac;
font-family: 'Courier New', Courier, monospace;
@media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    font-size: 10px;
  }
`

const SigamNos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 3px 0;
  `

const Redes = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    display: flex;
    flex-direction: column;
    width: 16px;
  }
  `

const TextoSigam = styled.p`
  margin: 0 0 3px 0;
  color: #a7a9ac;
  font-family: 'Courier New', Courier, monospace;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    display: none;
  }
  `

export class Footer extends Component {
  render() {
    return (
      <Rodape>

        <TextoLogoGeral>
          <TextoLogo1>
            ShirtX:
          </TextoLogo1>
          <TextoLogo2>
            Camisas leves que te fazem voar
          </TextoLogo2>
        </TextoLogoGeral>

        <TextoCentral>
          Pais Leme, 215, Pinheiros. CEP: 05424-150
        </TextoCentral>

        <SigamNos>
          <TextoSigam>Sigam-nos nas redes sociais:</TextoSigam>
          <Redes>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={instagram} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={youtube} /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={twitter} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={facebook} /></a>

          </Redes>
        </SigamNos>

      </Rodape>
    )
  }
}

