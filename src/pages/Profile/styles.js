import styled from 'styled-components/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;
export const Separator = styled.View`
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 20px 0 30px;
`;
export const Title = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    align-self: center;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;
