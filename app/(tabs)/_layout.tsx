import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#e50914' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ color }) => <MaterialIcons size={26} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="PizzasScreen"
        options={{
          title: 'Pizzas',
          headerShown:false,
          tabBarIcon: ({ color }) => <MaterialIcons size={26} name="local-pizza" color={color} />,
        }}
      />
      <Tabs.Screen
        name="MeltsScreen"
        options={{
          title: 'Melts',
          headerShown:false,
          tabBarIcon: ({ color }) => <MaterialIcons size={26} name="whatshot" color={color} />,
        }}
      />
      <Tabs.Screen
        name="DessertsScreen"
        options={{
          title: 'Desserts',
          headerShown:false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={26} name="cupcake" color={color}/>,
        }}
      />
      {/* <Tabs.Screen
        name="SettingScreen"
        options={{
          title: 'Settings',
          headerShown:false,
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
