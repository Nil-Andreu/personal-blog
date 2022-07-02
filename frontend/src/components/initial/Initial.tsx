import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../common/Navbar'
import Journey from "../journey/Journey"

function Initial() {
  return (
      <Container>
          <Navbar />
          <Dummy />
          <Journey />
      </Container>
    
  )
}

const Container = styled.div`
    width: 100vw;
    height: auto;
`

const Dummy = styled.div`
    height: 150vh;
    width: 100vw;
`

export default Initial