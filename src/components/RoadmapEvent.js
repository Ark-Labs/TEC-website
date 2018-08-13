import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  min-height: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: ${props =>
      props.direction === 'top' ? 'flex-end' : 'flex-start'};
    text-align: ${props => (props.direction === 'top' ? 'right' : 'left')};
    margin-bottom: 40px;
  }
`

const Arrow = styled(({ past, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="12"
    viewBox="0 0 25 12"
    {...props}
  >
    <path
      fill={past ? '#F7A825' : 'white'}
      fillRule="nonzero"
      d="M12.5 0L25 12H0z"
    />
  </svg>
))`
  transform: rotate(
    ${props => (props.direction === 'top' ? '90deg' : '-90deg')}
  );
  @media (max-width: 768px) {
    transform: rotate(
      ${props => (props.direction === 'top' ? '-90deg' : '90deg')}
    );
  }
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

  @media (max-width: 768px) {
    transform: none;
    position: relative;
    top: unset;
    right: unset;
    flex-direction: ${props =>
      props.direction === 'top' ? 'row-reverse' : 'row'};
    margin-left: -30px;
    margin-top: 0;
  }
`

const Date = styled.div`
  color: #f7a825;
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  margin: 0 5px;
  white-space: nowrap;
`

const Text = styled.p`
  font-size: 18px;
  max-width: 150px;
`

const Event = ({ date, text, direction, past }) => (
  <Wrapper direction={direction}>
    <LeftColumn direction={direction}>
      <Arrow direction={direction} past={past} />
      <Date>{date}</Date>
    </LeftColumn>
    <Text>{text}</Text>
  </Wrapper>
)

export default Event
