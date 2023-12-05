import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native"
import { Card, CardContainer } from '../components/card.components';
import { Title } from '../components/title.component';

const Tab = createBottomTabNavigator();

export const ItemInfoPage = ({route, navigation}) => {

    var {item, render} = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: item.name
        })
    },[]);

    const { appearances, dungeons, inhabitants } = item;


    return (
      <Tab.Navigator>
        <Tab.Screen
          name="informacion"
          component={MainInfo}
          initialParams={{ item: item, render: render.renderInfoPage }}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require("../img/inf.jpg")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        
        {(appearances && appearances.length > 0) && (
          <Tab.Screen
            name="Apariciones"
            component={AppearancesInfo}
            initialParams={{ appearances: appearances }}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={require("../img/inf2.jpg")}
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />
        )}
        
        {(dungeons && dungeons.length > 0) && (
          <Tab.Screen
            name="Mazmorras"
            component={DungeonsInfo}
            initialParams={{ dungeons: dungeons }}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={require("../img/inf3.jpg")}
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />
        )}

        {(inhabitants && inhabitants.length > 0) && (
          <Tab.Screen
            name="Habitantes"
            component={InhabitantsInfo}
            initialParams={{ inhabitants: inhabitants }}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={require("../img/inf3.jpg")}
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />
        )}
      </Tab.Navigator>
    );
  }
  

const MainInfo = ({route}) => {
    const { item, render } = route.params;
    return (
      <ImageBackground source={require("../img/Z.jpg")} style={{ flex: 1 }}>
        {render != null ? (
          <ScrollView>{render(item)}</ScrollView>
        ) : (
          <CardContainer>
            <Card>
              <Title>Nombre</Title>
              <Text>{item.name}</Text>
            </Card>
            <Card>
              <Title>Descripción</Title>
              <Text>{item.description}</Text>
            </Card>
          </CardContainer>
        )}
      </ImageBackground>
    );
}

const AppearancesInfo = ({ route }) => {
  const { appearances } = route.params;

  return (
    <ImageBackground source={require("../img/ok.jpg")} style={{ flex: 1 }}>
      <CardContainer>
        {appearances.map((url, index) => (
          <Card key={index}>
            <AppearancesInfoItem key={index} url={url} />
          </Card>
        ))}
      </CardContainer>
    </ImageBackground>
  );
};

const AppearancesInfoItem = ({url}) => {

    const [text, setText] = useState();

    useEffect(() => {
        axios.get(url).then(res => {
            var data = res.data.data;
            setText(data.name);
        })
    },[])
    return(
        <Text style={{
            padding: 20,
            marginVertical: 20,
            textAlign: 'center'
        }}>
            {text && text}
        </Text>
    )
}

const DungeonsInfo = ({ route }) => {
  const { dungeons } = route.params;

  return (
    <ImageBackground source={require("../img/espada.jpg")} style={{ flex: 1 }}>
      <CardContainer>
        {dungeons.map((url, index) => (
          <Card>
            <DungeonsInfoItem key={index} url={url} />
          </Card>
        ))}
      </CardContainer>
    </ImageBackground>
  );
};

const DungeonsInfoItem = ({url}) => {

    const [text, setText] = useState();

    useEffect(() => {
        axios.get(url).then(res => {
            var data = res.data.data;
            setText(data.name);
        })
    },[])
    
    return(
        <Text style={{
            padding: 20,
            marginVertical: 20,
            textAlign: 'center'
        }}>
            {text && text}
        </Text>
    )
}

const InhabitantsInfo = ({ route }) => {
  const { inhabitants } = route.params;
  return (
    <ImageBackground source={require("../img/espada.jpg")} style={{ flex: 1 }}>
      <CardContainer>
        <ScrollView>
        {inhabitants.map((url, index) => (
          <Card>
            <GenericInfoItem key={index} url={url} />
          </Card>
        ))}
        </ScrollView>
      </CardContainer>
    </ImageBackground>
  );
};

const GenericInfoItem = ({url}) => {
  const [text, setText] = useState();

  useEffect(() => {
      axios.get(url).then(res => {
          var data = res.data.data;
          setText(data.name + '\n' + data.description);
      })
  },[])
  
  return(
      <Text style={{
          padding: 20,
          marginVertical: 20,
          textAlign: 'center'
      }}>
          {text && text}
          {}
      </Text>
  )
}