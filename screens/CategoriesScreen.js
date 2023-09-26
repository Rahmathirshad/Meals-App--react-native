import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../common-components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = (id) => {
    navigation.navigate("Meals Overview", { categoryId: id, });
  }
  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={(item) => (
      <CategoryGridTile title={item.item.title} color={item.item.color} onPress={() => pressHandler(item.item.id)} />
    )}
    numColumns={2}
    />
  );
};

export default CategoriesScreen;
