import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Container, Title } from './styles';

const Home:React.FC = () => {
  const navigation = useNavigation();
  return (
    <Background>
     <Container>
       <Title>Vaga Certa</Title>
     </Container>
    </Background>
  )
}

export default Home;