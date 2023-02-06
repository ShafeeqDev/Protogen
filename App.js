import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Auth/LogIn/Login';
import { NativeBaseProvider } from "native-base";
import SignUpPage from './src/components/organisms/SignUp/SignUpPage';
import Monitering from './src/components/organisms/Protogen/Home/Monitering/Monitering';
import { RootNavigation } from './src/navigation/RootNavigation';
import colors from './src/theme/colors/colors';
export default function App() {
  return(<NativeBaseProvider>
      {/* <StatusBar style="auto" /> */}
         <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      {/* <Monitering/> */}
      {/* <Login/> */}
      {/* <SignUpPage/> */}
      <RootNavigation/>
    </NativeBaseProvider>
  );
}
