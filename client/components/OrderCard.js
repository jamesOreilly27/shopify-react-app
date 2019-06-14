import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './styled-components/BaseComponents'

const OrderCard = ({ order }) => (
  <div>
    { order.email }
  </div>
)

export default OrderCard