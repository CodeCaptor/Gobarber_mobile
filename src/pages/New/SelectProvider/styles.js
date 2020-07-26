import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
    numColumns: 2,
})`
    margin-top: 50px;
    padding: 0 20px;
`;

export const Provider = styled.TouchableOpacity`
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    flex: 1;

    align-items: center;
    margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
`;

export const Name = styled.Text`
    color: #333;
    margin-top: 15px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`;
