import { View, Text, Image, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

interface Dessert {
  id: string;
  imgUrl: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}

const DATA: Dessert[] = [
  {
    id: 'D-0001',
    imgUrl: require('../../assets/images/pizza-hut/desserts/dessert-img-01.jpg'),
    title: 'Cinnamon Swirls (2pcs per portion)',
    description: 'A soft dough rolled with sweet cinnamon butter, baked to cream cheese, topped with mozzarella.',
    price: '470.00',
  },
  {
    id: 'D-0002',
    imgUrl: require('../../assets/images/pizza-hut/desserts/dessert-img-02.jpg'),
    title: 'Chocolate Melt Lava Cake',
    description: 'Soft, moist chocolate cake with a burst of thick, hot liquid chocolate inside!',
    price: '570.00',
  },
  {
    id: 'D-0003',
    imgUrl: require('../../assets/images/pizza-hut/desserts/dessert-img-03.jpg'),
    title: 'Chocolate Swirls (2pcs per portion)',
    description: 'A soft dough rolled with delicious chocolate chips, baked to perfection, and topped with a chocolate Glaze.',
    price: '570.00',
  },
  {
    id: 'D-0004',
    imgUrl: require('../../assets/images/pizza-hut/desserts/dessert-img-04.jpg'),
    title: 'Chocolate Calzone',
    description: 'A perfectly baked soft dough filled with chocolate chips and cream cheese, topped with mozzarella & glazed with caramel.',
    price: '570.00',
  }
];

const renderItem = ({ item }: { item: Dessert }) => (
  <View style={styles.pizzaCard}>
    <Image source={item.imgUrl} style={styles.pizzaImage} />
    <Text style={styles.pizzaTitle}>{item.title}</Text>
    <Text style={styles.pizzaDescription}>{item.description}</Text>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Add    Rs. {item.price}</Text>
    </TouchableOpacity>
  </View>
);

export default function DessertsScreen() {
  const [selectedSauce, setSelectedSauce] = useState('sauce');

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
        <Text style={styles.title}>DESSERTS</Text>
        <View style={styles.pizzaContainer}>
         <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.flatListContainer}
          />
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
  flatListContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pizzaContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  pizzaRow:{
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
    width: '100%'
  },
  pizzaCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 5,
    width: '48%',
    justifyContent: 'space-around'
  },
  pizzaImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  pizzaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  pizzaDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    width: '100%',
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
});


{/* <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewcontainer}>
          <Text style={styles.title}>DESSERTS</Text>
          <View style={styles.pizzaContainer}>
            First Row
            <View style={styles.pizzaRow}>
              <View style={styles.pizzaCard}>
                <Image source={require('../../assets/images/pizza-hut/desserts/dessert-img-01.jpg')} style={styles.pizzaImage} />
                <Text style={styles.pizzaTitle}>Cinnamon Swirls (2pcs per portion)</Text>
                <Text style={styles.pizzaDescription}>A soft dough rolled with sweet cinnamon butter, baked to cream cheese, topped with mozzarella.</Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Add    Rs. 470.00</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pizzaCard}>
                <Image source={require('../../assets/images/pizza-hut/desserts/dessert-img-03.jpg')} style={styles.pizzaImage} />
                <Text style={styles.pizzaTitle}>Chocolate Swirls (2pcs per portion)</Text>
                <Text style={styles.pizzaDescription}>A soft dough rolled with delicious chocolate chips, baked to perfection, and topped with a chocolate Glaze.</Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Add    Rs. 570.00</Text>
                </TouchableOpacity>
             </View>
            </View>
            Second Row
            <View style={styles.pizzaRow}>
            <View style={styles.pizzaCard}>
              <Image source={require('../../assets/images/pizza-hut/desserts/dessert-img-02.jpg')} style={styles.pizzaImage} />
              <Text style={styles.pizzaTitle}>Chocolate Melt Lava Cake</Text>
              <Text style={styles.pizzaDescription}>Soft, moist chocolate cake with a burst of thick, hot liquid chocolate inside!</Text>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Add    Rs. 570.00</Text>
                </TouchableOpacity>
           </View>
            <View style={styles.pizzaCard}>
              <Image source={require('../../assets/images/pizza-hut/desserts/dessert-img-04.jpg')} style={styles.pizzaImage} />
              <Text style={styles.pizzaTitle}>Chocolate Calzone</Text>
             <Text style={styles.pizzaDescription}>A perfectly baked soft dough filled with chocolate chips and cream cheese, topped with mozzarella & glazed with caramel.</Text>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Add    Rs. 570.00</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
       </ScrollView>
      </View> */}

      // scrollViewcontainer:{
      //   alignItems: 'center',
      // },