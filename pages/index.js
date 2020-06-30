import styled from 'styled-components'

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

const Card = styled.div`
  justify-self: center;
  align-self: center;
  display: grid;
  background: ${props => props.theme.colors.white};
`

const CardHeader = styled.div``

const Overview = styled.div``
const Date = styled.div``
const Signals = styled.div``

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`

const Footer = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
`

const Home = () => (
  <Container>
    <Header>
      <Title>Analog</Title>
    </Header>
    <Card>
      <CardHeader>
        <p>Today</p>
        <Overview>
          <p>Date Area</p>
          <Signals>
            <p>Card Signals</p>
          </Signals>
        </Overview>
      </CardHeader>
    </Card>

    <Footer>
      <p>This is an idea originally created by Jeff Sheldon. Legal Stuffs <a href='https://github.com/dock90/analog'>Here</a></p>
    </Footer>
  </Container>
)


export default Home
