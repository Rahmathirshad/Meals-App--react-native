import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Meals Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#0F0F0F" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#222222" },
          }}
        >
          <Stack.Screen name="Meals Categories" component={CategoriesScreen} options={{ title: 'All Categories',}}/>
          <Stack.Screen name="Meals Overview" component={MealsOverViewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
