import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Cart() {
    return (
        <View style={styles.container}>
          <View style={styles.ordersContainer}>

          </View>
          <View style={styles.paymentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.subTotalText}>Sub total</Text>
              <Text style={styles.subTotalText}>0.00</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Service Charge (0.00%)</Text>
              <Text style={styles.text}>0.00</Text>
            </View>
            <TouchableOpacity style={styles.borderButton} onPress={() => {}}>
              <Text style={styles.borderButtonText}>Continue Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  ordersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentContainer: {
    paddingVertical: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 14,
    color: '#191919',
  },
  subTotalText:{
    fontSize: 14,
    fontWeight: '500',
    color: '#191919',
  },
  button: {
    width: '100%',
    height: 35,
    backgroundColor: '#0a8020',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  borderButton:{
    width: '100%',
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    borderWidth: 2,
    borderColor: '#0a8020',
  },
  borderButtonText:{
    color: '#0a8020',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  },
});
