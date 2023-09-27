import { View, Text, StyleSheet } from "react-native"

const Subtitle = ({ children }) => {
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 13,
        marginVertical: 4,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    subtitle:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Subtitle;