import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import { Link, router } from "expo-router";

export default function LogIn() {
    return (
        <ImageBackground 
            source={require('../assets/images/pizza-hut/background-img.jpg')} 
            style={styles.background}
        >
            <View style={styles.header}>
                <Image 
                    source={require('../assets/images/pizza-hut/pizza-hut-logo.png')} 
                    style={styles.logo}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.overlay}>
                    <Text style={styles.logInTxt}>LET'S START YOUR ORDER</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Username" placeholderTextColor="#0d0d0d" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Password" placeholderTextColor="#0d0d0d" secureTextEntry style={styles.input} />
                    </View>
                    <Pressable style={styles.loginButton} onPress={()=> router.push("/(tabs)")}>
                        <Text style={styles.loginButtonText}>LOGIN</Text>
                    </Pressable>
                    <Pressable style={styles.forgotPasswordContainer}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </Pressable>
                    <Pressable style={styles.googleButton}>
                        <Image 
                            source={require('../assets/images/pizza-hut/google-logo.png')} 
                            style={styles.googleLogo}
                        />
                        <Text style={styles.googleButtonText}>Log in with Google</Text>
                    </Pressable>
                    <Text style={styles.signUpText}>Don’t have an account? <Text style={styles.signUpLink} onPress={()=> router.push("/SignUp")}>Sign Up</Text></Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 95,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    logo: {
        marginTop: 30,
        marginLeft: 10,
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    overlay: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    logInTxt: {
        fontSize: 15,
        marginBottom: 20,
        color: '#0d0d0d',
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#0d0d0d',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#0d0d0d',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        flex: 1,
        color: '#0d0d0d',
    },
    loginButton: {
        width: 150,
        height: 40,
        backgroundColor: '#e50914',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordContainer: {
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#0d0d0d',
        textDecorationLine: 'underline',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#0d0d0d',
        borderRadius: 5,
        padding: 10,
        width: 250,
        marginBottom: 5,
        marginTop: 5
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    googleButtonText: {
        color: '#0d0d0d',
        fontSize: 16,
    },
    signUpText: {
        color: '#0d0d0d',
        marginTop: 0,
    },
    signUpLink: {
        color: '#e50914',
        fontWeight: 'bold',
    },
});

