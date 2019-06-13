import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './styled-components/BaseComponents'

const Wrapper = styled(FlexRowContainer)`
  background-color: #3C8D93;
  color: #D9D7CA;
  width: 80vw;
  margin: 5px;
  padding: 18px;
  @media(max-width: 480px) {
    flex-direction: column;
    border-radius: 15px;
  }
`

const ImageContainer = styled.div`
  @media(max-width: 480px) {
    width: 75%;
  }

  img {
    border-radius: 20%;
    width: 100%;
  }
`

const TextContainer = styled(FlexRowContainer)`
  font-size: 3vw;
`

const separateTitle = title => title.split(' | ')

const renderTitle = titleSections => (
  <FlexColumnContainer>
    {titleSections.map(section => <TextContainer key={section}> {section} </TextContainer> )}
  </FlexColumnContainer>
)

const ProductCard = ({ product }) => (
  <Wrapper>
    <ImageContainer>
      <img src={product.image.src} />
    </ImageContainer>
    <div>
      {renderTitle(separateTitle(product.title))}
    </div>
  </Wrapper>
)

export default ProductCard
