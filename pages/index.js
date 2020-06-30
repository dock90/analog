import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 50px;
  height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  background: ${props => props.theme.colors.background};
`

const Header = styled.div``

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`

const Card = styled.div`
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  background: ${props => props.theme.colors.white};
  box-shadow: 5px 5px 8px 2px #ccc;
  border-radius: 5px;
  width: 288px;
  height: 480px;
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  p {
    margin: 0;
  }
`

const CardType = styled.div`
`

const Overview = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-template-rows: 1fr;
  justify-items: end;
`
const Today = styled.div`
`

const Signals = styled.div`
`
const Signal = styled.div`
  height: 5px;
  width: 5px;
  border: 0.5px solid black;
  border-radius: 50%;
  margin-bottom: 2px;
`

const Task = styled.div`
  p {
    margin: 0;
  }
`

const Footer = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
`

const Home = () => {
  const [today, setToday] = useState(null);

  useEffect(() => {
    setToday(format(new Date(), 'MM/dd/yyyy'))
  });

  return (
    <Container>
      <Header>
        <Title>Analog</Title>
      </Header>
      <Card>
        <CardHeader>
          <CardType><p>Today</p></CardType>
          <Overview>
            <Today><p>{today}</p></Today>
            <Signals>
              <Signal></Signal>
              <Signal></Signal>
              <Signal></Signal>
            </Signals>
          </Overview>
        </CardHeader>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
        <Task><p>A Task</p></Task>
      </Card>

      <Footer>
        <p>This is an idea originally created by Jeff Sheldon. Legal Stuffs <a href='https://github.com/dock90/analog'>Here</a></p>
      </Footer>
    </Container>
  )
}


export default Home
