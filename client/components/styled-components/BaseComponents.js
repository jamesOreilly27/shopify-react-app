import styled from 'styled-components'

export const FlexRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`

export const FlexColumnContainer = styled(FlexRowContainer)`
  flex-direction: column;
`
