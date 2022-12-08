import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Provider } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return <Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' }
            }}>
            <Stack.Screen name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                title: 'All Categories',

              }}
            />
            <Stack.Screen name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer >
      </Provider >




    </>
  );
}

