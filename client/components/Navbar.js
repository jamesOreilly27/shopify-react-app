import React, { Component } from 'react'
import { FlexRowContainer } from './styled-components/BaseComponents'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const navLinks = [
  {type: 'home', path: '/'},
  {type: 'products', path: '/products/all'},
  {type: 'customers', path: '/customers/all'},
  {type: 'orders', path: '/orders/all'}
]

const LinkContainer = styled.div`
  border-radius: .3em;

  &:hover {
    background-color: rgba(33, 198, 0, 0.74);
    transition: all .8s;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #F3EDED;
  text-shadow: .01em .01em .05em #F3EDED;
  font-size: 1.3em;
  padding: .7em .5em 0;
  margin: 0;
`

const Navbar = () => (
  <FlexRowContainer>
    {navLinks.map(link => {
      return (
        <LinkContainer key={link.type}>
          <NavLink to={link.path}>{link.type}</NavLink>
        </LinkContainer>
      )
    })}
  </FlexRowContainer>
)

export default Navbar
