import { Image, View } from "react-native"

export const ItemImage = ({name}) => {
  var defaultImage = require("../img/no-image.jpg");

  return (
    <Image
    style={{
      height: "50%",
      width: "50%",
      alignSelf:'center'
    }}
    source={defaultImage}
  />
  );
}