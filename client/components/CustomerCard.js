import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './styled-components/BaseComponents'

const CustomerCard = ({ customer }) => (
  <div>
    { `${customer.first_name} ${customer.last_name}` }
  </div>
)

export default CustomerCard
