import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../services/api';
import { Background } from '../../../components/Background';
import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ navigation }) {
    const { provider } = navigation.state.params;
    const { value } = navigation.state.params;
    console.tron.log(value);
    const dateFormatted = useMemo(
        () => formatRelative(parseISO(value), new Date(), { locale: pt }),
        [value]
    );
    async function handleConfirmAppointment() {
        await api.post('appointments', {
            provider_id: provider.id,
            date: value,
        });
        navigation.navigate('Dashboard');
    }
    return (
        <Background>
            <Container>
                <Avatar
                    source={{
                        uri: provider.avatar
                            ? provider.avatar.url
                            : 'https://api.adorable.io/avatars/50/rocketseat.png',
                    }}
                />
                <Name>{provider.name}</Name>
                <Time>{dateFormatted}</Time>
                <SubmitButton onPress={handleConfirmAppointment}>
                    Confirmar Agendamento
                </SubmitButton>
            </Container>
        </Background>
    );
}

Confirm.navigationOptions = ({ navigation }) => ({
    title: 'Confirmar agendamento',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
        >
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});
