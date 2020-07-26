import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../services/api';
import { Background } from '../../../components/Background';
import DateTimeInput from '../../../components/DateTimeInput';
import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [hours, setHours] = useState([]);
    const provider = navigation.state.params.item.item.id;
    useEffect(() => {
        async function loadAvaiableData() {
            const response = await api.get(`providers/${provider}/avaiable`, {
                params: { date: date.getTime() },
            });
            setHours(response.data);
        }
        loadAvaiableData();
        console.tron.log(hours);
    }, [date]);
    function handleSelectHOur() {
        navigation.navigate('Confirm', proider, time);
    }
    return (
        <Background>
            <Container>
                <DateTimeInput date={date} onChange={setDate} />
                <HourList
                    data={hours}
                    keyExtractor={(item) => item.time}
                    renderItem={({ item }) => (
                        <Hour
                            enabled={item.avaiable}
                            onPress={() => {
                                handleSelectHOur(item.value);
                            }}
                        >
                            <Title>{item.time}</Title>
                        </Hour>
                    )}
                />
            </Container>
        </Background>
    );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
    title: 'Selecione o horário',
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
