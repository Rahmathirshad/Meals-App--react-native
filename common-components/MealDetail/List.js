import { View, Text, StyleSheet } from "react-native";

const List = ({ listData }) => {
  return listData.map((listItem) => (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem} key={listItem}>
        {listItem}
      </Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItemContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  listItem: {
    textAlign: "center",
  },
});
export default List;
