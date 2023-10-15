import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Login,
  Signup,
  Welcome,
  Account,
  SelectionAcc,
  HomePage,
} from "./screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectionAcc"
          component={SelectionAcc}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

      {/* <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          component={InfoScreen}
          options={{
            title: "Home page",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Toup"
          component={ToupScreen}
          option={{
            title: "Toup Page",

            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="Topup" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Ticket"
          component={ToupScreen}
          option={{
            title: "Ticket Page",

            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="Ticket" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
