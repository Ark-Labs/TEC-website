import React from 'react'
import styled from 'styled-components'
import { Ribbon, Content, Title } from 'helpers'
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

const Name = styled.div`
  color: #f7a825;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  width: 150px;
  margin: 0 auto;
`

const Image = styled.img`
  clip-path: circle(40% at center);
`

const TeamMember = styled(Column)`
  margin-bottom: 2rem;
`

const TeamMembers = styled(Columns)`
  display: flex;
`

const TeamSection = ({ title, members }) => (
  <Wrapper>
    <PaddedContainer>
      <Ribbon color="#e52839" left="-600px" top />
      <Content>
        <Title>{title}</Title>
        <TeamMembers isMultiline>
          {members.map(({ image, name, description }) => (
            <TeamMember isSize={{ desktop: '1/4', mobile: '1/2' }} key={name}>
              <Image src={image} />
              <Name>{name}</Name>
              <Description>{description}</Description>
            </TeamMember>
          ))}
        </TeamMembers>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default TeamSection
