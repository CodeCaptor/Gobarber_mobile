import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { userRegisterProfileRequest } from '../../store/modules/user/actions';
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

export default function SignUp({ navigation }) {
    const loading = useSelector((state) => state.Auth.loading);
    const [NameField, setnameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    function handleSubmit() {
        dispatch(
            userRegisterProfileRequest({
                name: NameField,
                email: emailField,
                password: passwordField,
            })
        );
    }

    return (
        <Background>
            <Container>
                <Image source={Logo} />
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu nome completo"
                        value={NameField}
                        onChangeText={setnameField}
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current.focus()}
                    />
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu email"
                        value={emailField}
                        onChangeText={setEmailField}
                        ref={emailRef}
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        value={passwordField}
                        onChangeText={setPasswordField}
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />
                    <SubmitButton onPress={handleSubmit}>
                        Criar conta
                    </SubmitButton>
                </Form>
                <SignLink
                    loading={loading}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <SignLinkText>Já possuo cadastro</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
