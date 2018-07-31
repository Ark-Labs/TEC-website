import React from 'react'
import styled from 'styled-components'
import { Content, Title, Button } from 'helpers'
import { Container, Columns, Column } from 'bloomer'

const Wrapper = styled.section`
  position: relative;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 0 28px;
  }
`

const Body = styled.div`
  margin-bottom: 36px;
  white-space: pre-line;
  font-size: 18px;
`

const CenteredColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const Image = styled.img`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 0;
    width: 110%;
    max-width: none;
    transform: translateY(-50%);
  }
`

const DPoSSection = ({ title, body, backgroundImage, button }) => (
  <Wrapper id="blockchain">
    <PaddedContainer>
      <Content>
        <Columns>
          <Column isSize="2/3">
            <Title>{title}</Title>
            <Body>{body}</Body>
          </Column>
          <CenteredColumn>
            <Image src={backgroundImage} />
            <Button {...button} />
          </CenteredColumn>
        </Columns>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default DPoSSection
