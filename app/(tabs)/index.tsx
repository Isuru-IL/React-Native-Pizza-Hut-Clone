import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, FlatList, ListRenderItem, ImageSourcePropType, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

interface Deal {
  id: string;
  imgUrl: ImageSourcePropType;
  title: string;
  price: string;
}

const DATA: Deal[] = [
  {
    id: 'H-0001',
    imgUrl: require('../../assets/images/pizza-hut/home/home-img-01.jpg'),
    title: 'Snack Pack',
    price: '4,000.00'
  },
  {
    id: 'H-0002',
    imgUrl: require('../../assets/images/pizza-hut/home/home-img-02.jpg'),
    title: 'My Box Pro',
    price: '1,800.00'
  },
  {
    id: 'H-0003',
    imgUrl: require('../../assets/images/pizza-hut/home/home-img-03.jpg'),
    title: 'Family Fun',
    price: '4,200.00'
  },
  {
    id: 'H-0004',
    imgUrl: require('../../assets/images/pizza-hut/home/home-img-01.jpg'),
    title: 'Family Fun',
    price: '4,200.00'
  }
];

const renderItem: ListRenderItem<Deal> = ({ item }) => (
    <View style={styles.dealsCard}>
      <Image source={item.imgUrl} style={styles.pizzaImage} />
      <View style={styles.buttonContainer}>
        <Text style={styles.pizzaTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add Rs. {item.price}</Text>
        </TouchableOpacity>
      </View>
    </View>
);

export default function index() {
  return (
    <ImageBackground
      source={require('../../assets/images/pizza-hut/background-img.jpg')} 
      style={styles.background}
    >
      <View style={styles.header}>
        <Image source={require('../../assets/images/pizza-hut/pizza-hut-logo.png')} 
          style={styles.logo}
        />
        <View style={styles.iconContainer}>
          <FontAwesome name="shopping-cart" size={24} color="black" style={styles.icon} onPress={()=> router.push('../Cart')}/>
          <FontAwesome name="sign-out" size={24} color="black" style={styles.icon} onPress={()=> router.push('../LogIn')}/>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>DEALS</Text>
        <View style={styles.dealsContainer}>
          <FlatList<Deal>
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    marginTop: '8%',
    resizeMode: 'contain',
  },
  iconContainer: {
    marginTop: '8%',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  dealsContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  flatListContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dealsCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: width - 20,
    justifyContent: 'space-around',
    columnGap: 10,
  },
  pizzaImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  pizzaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5
  },
  button: {
    width: 200,
    height: 35,
    backgroundColor: '#0a8020',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  },
  selectContainer: {
    marginBottom: 10,
  },
});


{/* <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
          <Text style={styles.title}>DEALS</Text>
          <View style={styles.dealsContainer}>
            First Row
            <View style={styles.dealsRow}>
              <View style={styles.dealsCard}>
                <Image source={require('../../assets/images/pizza-hut/home/home-img-01.jpg')} style={styles.pizzaImage} />
                <View style={styles.buttonContainer}>
                  <Text style={styles.pizzaTitle}>Snack Pack</Text>
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Add Rs. 4,000.00</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            Second Row
            <View style={styles.dealsRow}>
              <View style={styles.dealsCard}>
                <Image source={require('../../assets/images/pizza-hut/home/home-img-02.jpg')} style={styles.pizzaImage} />
                <View style={styles.buttonContainer}>
                  <Text style={styles.pizzaTitle}>My Box Pro</Text>
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Add Rs. 1,800.00</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            Third Row
            <View style={styles.dealsRow}>
              <View style={styles.dealsCard}>
                <Image source={require('../../assets/images/pizza-hut/home/home-img-03.jpg')} style={styles.pizzaImage} />
                <View style={styles.buttonContainer}>
                  <Text style={styles.pizzaTitle}>Family Fun</Text>
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Add Rs. 4,200.00</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
       </ScrollView>
      </View> */}

      // scrollViewcontainer:{
  //   alignItems: 'center',
  // },
  // dealsRow:{
  //   flex: 1,
  //   flexDirection: 'row',
  //   columnGap: 10,
  //   width: '100%'
  // },
  