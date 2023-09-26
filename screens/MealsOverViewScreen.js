import { FlatList, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data";
import MealItem from "../common-components/MealItem";



const MealsOverViewScreen = ({ route}) => {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >=0;
  });
  return (
    <View>
        <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={(item) => {
          return <MealItem {...item.item} />
        }}/>
    </View>
  )
}

export default MealsOverViewScreen