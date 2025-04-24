import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    margin: 5rem;
`
export default function NotFoundPage(){

    return (
      <Container>
        404 Not Found
        <Link to="/">Home</Link>
      </Container>
    )
 
}
