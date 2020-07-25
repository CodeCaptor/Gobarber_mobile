import React, { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Title,
    Form,
    FormInput,
    Separator,
    SubmitButton,
    LogoutButton,
} from './styles';
import { userUpdateProfileRequest } from '../../store/modules/user/actions';
import { authSignOut } from '../../store/modules/auth/actions';

import { Background } from '../../components/Background';

export default function Profile() {
    const dispatch = useDispatch();
    const UserData = useSelector((state) => state.User.profile);

    const [NameField, setnameField] = useState(UserData.name);
    const [emailField, setEmailField] = useState(UserData.email);
    const [passwordField, setPasswordField] = useState('');
    const [oldpasswordField, setOldpasswordField] = useState('');
    const [confirmpasswordField, setConfirmpasswordField] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();
    const oldpasswordRef = useRef();
    const confirmpasswordRef = useRef();

    useEffect(() => {
        setPasswordField('');
        setOldpasswordField('');
        setConfirmpasswordField('');
    }, [UserData]);

    function handleSubmit() {
        dispatch(
            userUpdateProfileRequest({
                name: NameField,
                email: emailField,
                oldpassword: oldpasswordField,
                password: passwordField,
                confirmPassword: confirmpasswordField,
            })
        );
    }
    function handleLogout() {
        dispatch(authSignOut());
    }
    return (
        <Background>
            <Container>
                <Title>Meu Perfil</Title>
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder={NameField}
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
                        placeholder={emailField}
                        value={emailField}
                        onChangeText={setEmailField}
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <Separator />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua senha atual"
                        returnKeyType="next"
                        value={oldpasswordField}
                        onChangeText={setOldpasswordField}
                        ref={oldpasswordRef}
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua nova senha"
                        value={passwordField}
                        onChangeText={setPasswordField}
                        ref={passwordRef}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            confirmpasswordRef.current.focus()
                        }
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Confirme sua nova senha"
                        value={confirmpasswordField}
                        onChangeText={setConfirmpasswordField}
                        ref={confirmpasswordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />
                    <SubmitButton onPress={handleSubmit}>
                        Atualizar perfil
                    </SubmitButton>
                    <LogoutButton onPress={handleLogout}>
                        Sair do GoBarber
                    </LogoutButton>
                </Form>
            </Container>
        </Background>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person" size={20} color={tintColor} />
    ),
};
