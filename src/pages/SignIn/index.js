import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest } from '../../store/modules/auth/actions';
import Logo from '../../assets/logo.png';
import {
    Container,
    Image,
    Form,
    FormInput,
    SubmitButton,
    SignLinkText,
    SignLink,
} from './styles';
import { Background } from '../../components/Background';

export default function SignIn({ navigation }) {
    const dispatch = useDispatch();
    const passwordRef = useRef();
    const loading = useSelector((state) => state.Auth.loading);
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    function handleSubmit() {
        dispatch(authRequest(emailField, passwordField));
    }
    return (
        <Background>
            <Container>
                <Image source={Logo} />
                <Form>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu email"
                        returnKeyType="next"
                        value={emailField}
                        onChangeText={setEmailField}
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        ref={passwordRef}
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        returnKeyType="send"
                        value={passwordField}
                        onChangeText={setPasswordField}
                        onSubmitEditing={handleSubmit}
                    />
                    <SubmitButton loading={loading} onPress={handleSubmit}>
                        Acessar
                    </SubmitButton>
                </Form>
                <SignLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
