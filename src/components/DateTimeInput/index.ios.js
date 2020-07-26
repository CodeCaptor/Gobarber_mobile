import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { DatePickerIOS } from 'react-native';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, DateButton, DateText } from './styles';

export default function DateTimeInput({ date }) {
    const [opened, setOpened] = useState(false);
    const dateFormatted = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
        [date]
    );
    return (
        <Container>
            <DateButton onPress={() => setOpened(!opened)}>
                <Icon name="event" color="#fff" size={20} />
                <DateText>{dateFormatted}</DateText>
            </DateButton>
            {opened && (
                <Picker>
                    <DatePickerIOS
                        date={date}
                        onDateChange={dateFormatted}
                        minimumDate={new Date()}
                        minuteInterval={60}
                        locale="pt"
                        mode="date"
                    />
                </Picker>
            )}
        </Container>
    );
}
