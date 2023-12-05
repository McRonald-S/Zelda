import { useEffect, useState } from "react";
import { Button, FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import { get } from "../utils/httpHelper";

export const ListPage = ({route, navigation}) => {

    var {resource, title, image, renderInfoPage} = route.params;
    
    const [value, onChangeText] = useState(title);
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        navigation.setOptions({
            title: value === '' ? 'Lista' : value
        })
    }, [[navigation, value]]);

    useEffect(() => {
      get(resource).then(data => {
        setListItems(data);
    })
    },[])

    return(
      <ScrollView>
        <ImageBackground source={image} resizeMode="repeat">
            {
                listItems &&
                <FlatList
                data={listItems}
                renderItem={(item ,index) => <ListPageItem {...item} image={image} renderInfoPage={renderInfoPage} key={index} navigation={navigation} />}
                />
            }
        </ImageBackground>
      </ScrollView>
    )
  }

  const ListPageItem = ({item, navigation, renderInfoPage, image}) => {
    return (
      <Text
        style={{
          padding: 20,
          marginVertical: 5,
          backgroundColor: "#00000083",
          color: "#FFFFFF",
          textAlign: "center",
        }}
        onPress={() => {
          navigation.navigate("ItemInfoPage", {
            item: {...item},
            render: {renderInfoPage},
            image: {image}
          });
        }}
      >
        {item.name}
      </Text>
    )
  }