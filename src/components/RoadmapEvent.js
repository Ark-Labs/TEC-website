import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  min-height: 100px;
`

const Arrow = styled(({ active, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="12"
    viewBox="0 0 25 12"
    {...props}
  >
    <path
      fill={active ? '#F7A825' : 'white'}
      fillRule="nonzero"
      d="M12.5 0L25 12H0z"
    />
  </svg>
))`
  transform: rotate(
    ${props => (props.direction === 'top' ? '90deg' : '-90deg')}
  );
`

const LeftColumn = styled.div`
  transform: rotate(-90deg);
  position: absolute;
  top: 0;
  right: 100%;
  white-space: nowrap;
  margin-right: -30px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: ${props =>
    props.direction === 'top' ? 'row' : 'row-reverse'};
`

const Date = styled.div`
  color: #f7a825;
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  margin: 0 5px;
`

const Text = styled.p`
  font-size: 18px;
  max-width: 150px;
`

const Event = ({ date, text, direction }) => (
  <Wrapper>
    <LeftColumn direction={direction}>
      <Arrow direction={direction} />
      <Date>{date}</Date>
    </LeftColumn>
    <Text>{text}</Text>
  </Wrapper>
)

export default Event
