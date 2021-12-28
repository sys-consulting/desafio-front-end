import * as React from 'react';
import { Text, View } from 'react-native';

// Import de icones estilo ios 
import { Ionicons } from '@expo/vector-icons';

// Esse import e necessario para criacao da tab bar de navegacao
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Esse import e necessario para a criacao e navegacao entre telas 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import do gerenciador dos elementos de navegacao
import { NavigationContainer } from '@react-navigation/native';

// Import das Telas Inicial e de detalhes
import HomeScreen from './components/HomeScreen'
import DetailScreen from './components/DetailScreen'

// Essa tela e um requisito nao-funcional
function ProfileScreen() { return; } 

// Essa tela e um requisito nao-funcional
function LibrariesScreen() { return; }

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

// Stack que contem a estrutura da Tab Bar de navegacao
function TabStack(){
  return (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'ios-home';
        } else if (route.name === 'Profile') {
          iconName = 'ios-person-outline';
        } else if (route.name === 'Libraries') {
          iconName = 'ios-book-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      headerShown: false
      })}
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen 
      name="Libraries" 
      component={LibrariesScreen} 
      listeners={{
        tabPress: e => {
          e.preventDefault();
        },
      }} 
    />
    <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      listeners={{
        tabPress: e => {
          e.preventDefault();
        }
      }}
    />
  </Tab.Navigator>
  )
}

// Stack responsavel pela organizacao da navegacao entre telas
function HomeStack(){
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen 
      name='Home'
      component={TabStack}
    />
    <Stack.Screen 
      name='Detail'
      component={DetailScreen}
    />
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
