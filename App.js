import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login/LoginScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('./src/assets/fonts/Roboto-BlackItalic.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('./src/assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('./src/assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./src/assets/fonts/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('./src/assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./src/assets/fonts/Roboto-Thin.ttf'),
    'Roboto-ThinItalic': require('./src/assets/fonts/Roboto-ThinItalic.ttf'),
  });
  if (!fontsLoaded) { return null }
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown:false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


