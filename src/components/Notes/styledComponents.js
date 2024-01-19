import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto';
  color: #475569;
`

export const H1 = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
  font-size: 44px;
`
export const SubContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 950px;
  box-shadow: 1px 1px 5px 5px #aab8c8;
  border-radius: 6px;
  padding: 10px;
  margin-top: 10px;
`
export const Input = styled.input`
  width: 930px;
  border: none;
  color: #475569;
  margin: 5px;
  height: 40px;
  outline: none;
  font-size: 16px;
  font-weight: 500;
`
export const TextArea = styled.textarea`
  width: 930px;
  border: none;
  color: #475569;
  margin: 5px;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  height: 120px;
`
export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  width: 80px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  align-self: flex-end;
  margin: 10px;
  cursor: pointer;
`
export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0px;
  margin-top: 40px;
`
export const Img = styled.img`
  width: 140px;
`
export const UnorderList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 980px;
  margin-left: -50px;
  flex-wrap: wrap;
`
