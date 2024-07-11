import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import { Link } from "expo-router";

export default function SignUp() {
    return (
        <ImageBackground 
            source={require('../../assets/images/pizza-hut/background-img.jpg')} 
            style={styles.background}
        >
            <View style={styles.header}>
                <Image 
                    source={require('../../assets/images/pizza-hut/pizza-hut-logo.png')} 
                    style={styles.logo}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.overlay}>
                    <Text style={styles.signUpTxt}>CREATE YOUR ACCOUNT</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Username" placeholderTextColor="#0d0d0d" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Email" placeholderTextColor="#0d0d0d" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Password" placeholderTextColor="#0d0d0d" secureTextEntry style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Confirm Password" placeholderTextColor="#0d0d0d" secureTextEntry style={styles.input} />
                    </View>
                    <Pressable style={styles.signUpButton}>
                        <Link href="/Home" style={styles.signUpButtonText}>SIGN UP</Link>
                    </Pressable>
                    <Pressable style={styles.googleButton}>
                        <Image 
                            source={require('../../assets/images/pizza-hut/google-logo.png')} 
                            style={styles.googleLogo}
                        />
                        <Text style={styles.googleButtonText}>Sign up with Google</Text>
                    </Pressable>
                    <Text style={styles.logInText}>Already have an account? <Text style={styles.logInLink}>Log In</Text></Text>
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
    signUpTxt: {
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
    signUpButton: {
        width: 150,
        height: 40,
        backgroundColor: '#e50914',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
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
        marginTop: 5,
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
    logInText: {
        color: '#0d0d0d',
        marginTop: 0,
    },
    logInLink: {
        color: '#e50914',
        fontWeight: 'bold',
    },
});
