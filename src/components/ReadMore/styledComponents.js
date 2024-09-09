import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 30px;
  font-family: Roboto;
`
export const ImageCard = styled.img`
  width: 70%;
  height: 50%;
  margin: 30px 20px 20px 20px;
`
export const Paragraph = styled.p`
  max-width: 70%;
  color: #334155;
  font-weight: 500;
`
export const ButtonEle = styled.button`
  margin-top: 40px;
  background: #1f81ff;
  border: none;
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  outline: none;
  letter-spacing: 1px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    margin-right: auto;
    margin-left: 60px;
    margin-top: 20px;
  }
`
