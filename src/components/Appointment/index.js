import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Avatar, Info, Time, Name } from './styles';
import api from '../../services/api';

export default function Appointment({ data, onCancel }) {
    const dateParsed = useMemo(() => {
        return formatRelative(parseISO(data.date), new Date(), {
            locale: pt,
            addSufix: true,
        });
    }, [data.date]);

    return (
        <Container past={data.past}>
            <Left>
                <Avatar
                    source={{
                        uri: data.provider.avatar
                            ? data.provider.avatar.url
                            : 'https://api.adorable.io/avatars/50/rocketseat.png',
                    }}
                />
                <Info>
                    <Name>{data.provider.name}</Name>
                    <Time>{dateParsed}</Time>
                </Info>
            </Left>
            {data.cancelable && (
                <TouchableOpacity onPress={onCancel}>
                    <Icon name="event-busy" size={20} color="#f64c75" />
                </TouchableOpacity>
            )}
        </Container>
    );
}
