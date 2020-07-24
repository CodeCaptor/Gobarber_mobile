import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';
import { Background } from '../../components/Background';

export default function Dashboard() {
    return (
        <Background>
            <Container>
                <Text>Dashboard</Text>
            </Container>
        </Background>
    );
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Agendamentos',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="event" size={20} color={tintColor} />
    ),
};
