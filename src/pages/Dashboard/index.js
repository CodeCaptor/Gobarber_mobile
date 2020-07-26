import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import api from '../../services/api';
import { Container, Title, List } from './styles';
import { Background } from '../../components/Background';
import Appointment from '../../components/Appointment';

function Dashboard({ isFocused }) {
    const [appointments, setAppointments] = useState([]);

    async function getAppointmentsData() {
        const response = await api.get('appointments');
        setAppointments(response.data);
    }

    useEffect(() => {
        if (isFocused) {
            getAppointmentsData();
        }
    }, [isFocused]);
    async function handleCancel(id) {
        await api.delete(`appointments/${id}`);
        setAppointments(
            appointments.filter((appointment) => appointment.id !== id)
        );
    }
    return (
        <Background>
            <Container>
                <Title>Agendamentos</Title>
                <List
                    data={appointments}
                    KeyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Appointment
                            onCancel={() => handleCancel(item.id)}
                            data={item}
                        />
                    )}
                />
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

export default withNavigationFocus(Dashboard);
