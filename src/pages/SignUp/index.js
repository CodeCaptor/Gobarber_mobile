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

export default function SignUp({ navigation }) {
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
                    />
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
                <SignLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Já possuo cadastro</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
