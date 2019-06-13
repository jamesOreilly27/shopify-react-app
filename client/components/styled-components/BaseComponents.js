import styled from 'styled-components'

export const FlexRowContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center
`

export const FlexColumnContainer = styled(FlexRowContainer)`
  flex-direction: column;
`
