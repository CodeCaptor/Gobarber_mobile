import React, { useRef } from 'react';
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
    function handleSubmit() {}
    const passwordRef = useRef();
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
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        ref={passwordRef}
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />
                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
                </Form>
                <SignLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
