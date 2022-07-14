import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../common/Navbar'
import Journey from "../journey/Journey"
import Introduction from "../introduction/Introduction"
import Skills from '../skills/Skills'
import Projects from "../projects/Projects"

function Initial() {
  return (
      <Container>
          <Navbar />
          <Introduction />
          <Journey />
          <Skills />
          <Projects />
      </Container>
    
  )
}

const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: white;
`

const Dummy = styled.div`
    height: 150vh;
    width: 100vw;
`

export default Initial