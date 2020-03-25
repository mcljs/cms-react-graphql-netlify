import styled from 'styled-components'
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  padding: 0.5rem;
  flex-wrap: wrap;
  background-color: #fff8dc;
  box-shadow: 1px 12px 5px -10px rgba(0,0,0,0.15);
`
export const LayoutList = styled.li`
  padding: 0px 1.5rem;
  margin: 0.5rem;
    .active{
      color: #bc8f8f;
    }
`
export const LayoutLink = styled(Link)`
  color: #000723;
  letter-spacing: 0.005rem;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  &:hover{
    opacity: 0.5;
    transition: opacity 0.5s, transform 0.3s;
    background: #fff8dc;
}
`