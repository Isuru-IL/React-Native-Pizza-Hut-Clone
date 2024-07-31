import { View, Text, Image, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React, {useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

interface Melt {
  id: string;
  imgUrl: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}

const DATA: Melt[] = [
  {
    id: 'M-0001',
    imgUrl: require('../../assets/images/pizza-hut/melts/melts-img-01.jpg'),
    title: 'Chilli Chicken Pizza',
    description: 'A pizza topped with Spicy Chicken, Green Chillies, Onions & Mozzarella.',
    price: '2,840.00',
  },
  {
    id: 'M-0002',
    imgUrl: require('../../assets/images/pizza-hut/melts/melts-img-01.jpg'),
    title: 'Sausage Delight with Onions',
    description: 'Chicken sausages & onions with a double layer of cheese.',
    price: '2,840.00',
  },
  {
    id: 'M-0003',
    imgUrl: require('../../assets/images/pizza-hut/melts/melts-img-01.jpg'),
    title: 'Cheesy Tomato with Green Chillies',
    description: 'Rich tomato sauce base topped with cream cheese, onions, tomato, green chillies.',
    price: '2,840.00',
  },
  {
    id: 'M-0004',
    imgUrl: require('../../assets/images/pizza-hut/melts/melts-img-01.jpg'),
    title: 'Cheesy Onion with Green Chillies',
    description: 'Rich tomato sauce base topped with cream cheese, onions, green chillies.',
    price: '2,840.00',
  }
];

export default function MeltsScreen() {
  const [selectedSauces, setSelectedSauces] = useState<{ [key: string]: string }>({});

  const renderItem = ({ item }: { item: Melt }) => (
    <View style={styles.pizzaCard}>
      <Image source={item.imgUrl} style={styles.pizzaImage} />
      <Text style={styles.pizzaTitle}>{item.title}</Text>
      <Text style={styles.pizzaDescription}>{item.description}</Text>
      <View style={styles.selectContainer}>
        <Text>Select Sauce</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedSauces[item.id] || 'kotchchi'}
            style={styles.selectPickerBox}
            onValueChange={(itemValue) => setSelectedSauces((prev) => ({
              ...prev,
              [item.id]: itemValue
            }))}
          >
            <Picker.Item label="Cheesy Kotchchi" value="kotchchi" />
            <Picker.Item label="Spicy Marinara" value="marinara" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Add Rs. {item.price}</Text>
      </TouchableOpacity>
    </View>
  );

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
        <Text style={styles.title}>MELTS</Text>
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
    width: '100%'
  },
  flatListContainer:{
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
  selectContainer: {
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  selectPickerBox: {
    height: 50,
    width: '100%',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
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
          <Text style={styles.title}>MELTS</Text>
          <View style={styles.pizzaContainer}>
            First Row
            <View style={styles.pizzaRow}>
              <View style={styles.pizzaCard}>
                <Image source={require('../../assets/images/pizza-hut/melts/melts-img-01.jpg')} style={styles.pizzaImage} />
                <Text style={styles.pizzaTitle}>Chilli Chicken Pizza</Text>
                <Text style={styles.pizzaDescription}>A pizza topped with Spicy Chicken, Green Chillies, Onions & Mozzarella.</Text>
                <View style={styles.selectContainer}>
                  <Text>Select Sauce</Text>
                  <View style={styles.pickerContainer}>
                   <Picker
                      selectedValue={selectedSauce}
                      style={styles.selectPickerBox}
                      onValueChange={(itemValue) => setSelectedSauce(itemValue)}
                    >
                      <Picker.Item label="Cheesy Kotchchi" value="kotchchi" />
                      <Picker.Item label="Spicy Marinara" value="marinara" />
                    </Picker>
                  </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Add    Rs. 2,840.00</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pizzaCard}>
                <Image source={require('../../assets/images/pizza-hut/melts/melts-img-01.jpg')} style={styles.pizzaImage} />
                <Text style={styles.pizzaTitle}>Cheesy Onion with Green Chillies</Text>
                <Text style={styles.pizzaDescription}>Rich tomato sauce base topped with cream cheese, onions, green chillies.</Text>
                <View style={styles.selectContainer}>
                  <Text>Select Sauce</Text>
                  <View style={styles.pickerContainer}>
                   <Picker
                      selectedValue={selectedSauce}
                      style={styles.selectPickerBox}
                      onValueChange={(itemValue) => setSelectedSauce(itemValue)}
                    >
                      <Picker.Item label="Cheesy Kotchchi" value="kotchchi" />
                      <Picker.Item label="Spicy Marinara" value="marinara" />
                    </Picker>
                  </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Add    Rs. 2,840.00</Text>
                </TouchableOpacity>
             </View>
            </View>
            Second Row
            <View style={styles.pizzaRow}>
            <View style={styles.pizzaCard}>
              <Image source={require('../../assets/images/pizza-hut/melts/melts-img-01.jpg')} style={styles.pizzaImage} />
              <Text style={styles.pizzaTitle}>Cheesy Tomato with Green Chillies</Text>
              <Text style={styles.pizzaDescription}>Rich tomato sauce base topped with cream cheese, onions, tomato, green chillies.</Text>
              <View style={styles.selectContainer}>
                  <Text>Select Sauce</Text>
                  <View style={styles.pickerContainer}>
                   <Picker
                      selectedValue={selectedSauce}
                      style={styles.selectPickerBox}
                      onValueChange={(itemValue) => setSelectedSauce(itemValue)}
                    >
                      <Picker.Item label="Cheesy Kotchchi" value="kotchchi" />
                      <Picker.Item label="Spicy Marinara" value="marinara" />
                    </Picker>
                  </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Add    Rs. 2,840.00</Text>
                </TouchableOpacity>
           </View>
            <View style={styles.pizzaCard}>
              <Image source={require('../../assets/images/pizza-hut/melts/melts-img-01.jpg')} style={styles.pizzaImage} />
              <Text style={styles.pizzaTitle}>Sausage Delight with Onions</Text>
             <Text style={styles.pizzaDescription}>Chicken sausages & onions with a double layer of cheese.</Text>
             <View style={styles.selectContainer}>
                  <Text>Select Sauce</Text>
                  <View style={styles.pickerContainer}>
                   <Picker
                      selectedValue={selectedSauce}
                      style={styles.selectPickerBox}
                      onValueChange={(itemValue) => setSelectedSauce(itemValue)}
                    >
                      <Picker.Item label="Cheesy Kotchchi" value="kotchchi" />
                      <Picker.Item label="Spicy Marinara" value="marinara" />
                    </Picker>
                  </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Add    Rs. 2,840.00</Text>
                </TouchableOpacity>
            </View>
            </View>
          </View>
       </ScrollView>
      </View> */}

      // pizzaRow:{
      //   flex: 1,
      //   flexDirection: 'row',
      //   columnGap: 10,
      //   width: '100%'
      // },