import { Button, FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import { Card, CardContainer } from "../components/card.components";
import { Title } from "../components/title.component";

const image = require('../img/zelda.jpg')

const menuItems = [
    {
        title: "Juegos",
        resource: 'games',
        image: require('../img/image_juegos.jpg'),
        renderInfoPage: (item) => {
          return (
              <CardContainer>
                <Card>
                <Title>Nombre</Title>
                  <Text>{item.name}</Text>
                </Card>
                <Card>
                  <Title>Descripción</Title>
                  <Text>{item.description}</Text>
                </Card>
                <Card>
                  <Title>Desarrollador</Title>
                  <Text>{item.developer}</Text>
                </Card>
                <Card>
                  <Title>Fecha de publicación</Title>
                  <Text>{item.released_date}</Text>
                </Card>
              </CardContainer>
            )
      }
    },
    {
        title: "Personajes",
        resource: 'characters',
        image: require('../img/personajes.jpg'),
        renderInfoPage: (item) => {
          return (
              <CardContainer>
                <Card>
                <Title>Nombre</Title>
                  <Text>{item.name}</Text>
                </Card>
                <Card>
                  <Title>Genero</Title>
                  <Text>{item.gender ? item.gender : 'N/A'}</Text>
                </Card>
                <Card>
                  <Title>Raza</Title>
                  <Text>{item.race ? item.race : 'N/A'}</Text>
                </Card>
                <Card>
                  <Title>Descripción</Title>
                  <Text>{item.description}</Text>
                </Card>
              </CardContainer>
            )
      }
    },
    {
        title: "Monstruos",
        resource: 'monsters',
        image: require('../img/perro.jpg'),
    },
    {
        title: "Jefes",
        resource: 'bosses',
        image: require('../img/jefes.jpg'),
    },
    {
        title: "Mazmorras",
        resource: 'dungeons',
        image: require('../img/nivel.jpg'),
    },
    {
        title: "Zonas",
        resource: 'places',
        image: require('../img/map.jpg'),
    },
    {
        title: "Objetos",
        resource: 'items',
        image: require('../img/obj.jpg')
    }
]

export const MainMenu = ({ navigation }) => {
  return (
    <ScrollView style={{height:'100%'}}>
      <ImageBackground source={image} sizemode="cover">
        <FlatList
          style={{
            padding: 20,
          }}
          data={menuItems}
          renderItem={({ item }) => (
            <MainMenuItem menuItem={item} navigation={navigation} />
          )}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const MainMenuItem = ({menuItem, navigation}) => {
    return (
        <Text
        style={{
            padding: 20,
            marginVertical: 20,
            backgroundColor: '#00000083',
            color: '#FFFFFF',
            textAlign: 'center'
        }}
        title={menuItem.title}
        onPress={() => {
          navigation.navigate(menuItem.screenName ? menuItem.screenName : 'ListPage', {
            ...menuItem
        });
        }}>
        {menuItem.title}
      </Text>
    )
}