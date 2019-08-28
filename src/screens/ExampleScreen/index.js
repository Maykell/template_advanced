import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container } from '~/components';

import styles from './styles';
import { colors } from '~/styles';

const MainScreen = () => {
    return (
        <Container style={styles.container}>
            <StatusBar
                backgroundColor={colors.purpleDark}
                barStyle="light-content"
            />
            <Text style={styles.welcome}>Bem vindo</Text>
            <Text style={styles.description}>
                Para começar é necessário configurar:
            </Text>
            <Text style={styles.item}>
                ■ Reactotron Debug: adb reverse tcp:9090 tcp:9090
            </Text>
        </Container>
    );
};

export default MainScreen;
