import React, {Component} from "react";
import styled from "styled-components";




export const Back = styled.body`
  background: black;

`;

export const P = styled.p`
  padding-right: 30px;
  padding-left: 30px;
  text-align: center;
  color: white;
  font-size: 40px;
  margin-bottom: 100px;
  
  @media screen and (max-width: 600px) {
    font-size: 26px;
  }


`;

export const Title = styled.div`
  padding-right: 30px;
  margin-top: 0px;
  padding-left: 30px;
  text-align: center;
  color: white;
  font-size: 120px;
  text-decoration: underline;
  text-decoration-color: red;
  padding-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 80px;
  }

`;

export const Img = styled.div`
  position: relative;

  
`;

