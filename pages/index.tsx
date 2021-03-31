import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
    font-size: 50px;
    color: black;
`;

export default function Home() {
  return (
    <Layout>
      <Title>Invoice App</Title>
    </Layout>
  )
}
