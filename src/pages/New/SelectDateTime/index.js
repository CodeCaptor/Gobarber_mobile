import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background } from '../../../components/Background';
// import { Container } from './styles';

export default function SelectDateTime() {
    return <Background />;
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
    title: 'Selecione o Prestador',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('New');
            }}
        >
            <Icon name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
    ),
});
