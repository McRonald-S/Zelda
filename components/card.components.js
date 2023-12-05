import { StyleSheet, View } from "react-native"

export const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    )
}

export const CardContainer = props => {
    return (
        <View style={{...styles.cardContainer, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'rgba(255, 174, 216, 0.5)',
      padding: 20,
      borderRadius: 10,
      margin: 2
    },
    cardContainer: {
        padding: 5,
        justifyContent:'center',
        flex: 1
    }
  });
  