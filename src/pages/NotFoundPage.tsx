import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
    font-size: 40px;
    display: flex;
    flex-direction: column;
    margin: 50px;
`
export default function NotFoundPage(){

    return (
      <Container>
        404 Not Found
        <Link to="/">Home</Link>
      </Container>
    )
 
}
