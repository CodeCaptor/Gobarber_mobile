import React from 'react';
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

export default function SignIn() {
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
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                    />
                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
                </Form>
                <SignLink onPress={() => {}}>
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
