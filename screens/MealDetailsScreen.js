import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../common-components/MealDetail/Subtitle";
import List from "../common-components/MealDetail/List";

const MealDetailsScreen = ({ route }) => {
  const { mealId } = route.params;
  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = MEALS.find((item) => item.id == mealId);
  return (
    <ScrollView style={styles.mealItem}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title} >{title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailsItem}>{duration}min</Text>
        <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.mealDetailContainer}>
        <Subtitle>INGREDIENTS</Subtitle>
        <List listData={ingredients} />
        <Subtitle>STEP</Subtitle>
        <List listData={steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
    
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    color: 'white',
    fontSize: 12,
    marginHorizontal: 4,
  },
  mealDetailContainer:{
    maxWidth: '80%',
    alignSelf: 'center'
  }
});

export default MealDetailsScreen;
