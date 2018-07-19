import styled from 'styled-components'

export const Ribbon = styled.div`
  background-color: ${props => props.color};
  opacity: 0.8;
  position: absolute;
  top: 0;
  ${props => (props.left ? `left: ${props.left}` : `right: ${props.right}`)};
  height: 100%;
  width: 600px;
  transform: skewX(45deg);
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
`
