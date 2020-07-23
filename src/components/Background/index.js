import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
    colors: ['#7159c1', '#ab59c1'],
})`
    flex: 1;
`;
