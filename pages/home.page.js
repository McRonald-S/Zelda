import { View, Text, Button, TouchableOpacity ,ScrollView, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ImageBackground } from 'react-native';
import { Card, CardContainer } from '../components/card.components';
import { MainMenu } from './mainMenu.page';
import { Title } from '../components/title.component';
import Icon from 'react-native-vector-icons/FontAwesome'; // para agreagr icono de me gusta

const Drawer = createDrawerNavigator();

export const HomePage = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Inicio"
        component={MainMenu}
        options={{ title: "Inicio" }}
      />
      <Drawer.Screen
        name="Me gusta"
        component={MeGusta}
      />
      <Drawer.Screen
        name="Mas informacion de zelda"
        component={MoreInfoPage}
      />
      <Drawer.Screen name="Creditos" component={CreditosPage} />
    </Drawer.Navigator>
  );
}


const MeGusta =() =>{
 
};


const MoreInfoPage = () => {
  return (
    <ScrollView style={{height: '100%'}}>
        <ImageBackground
          source={require('../img/mas.jpg')}
        >
        <CardContainer>
          <Card>
          <Text style={{ textAlign: "center", color: "black", fontSize: 20, fontWeight: "bold" }}>
          THE LEGEND OF ZELDA
        </Text> 
          </Card>
          <Card>
            <Text>
            «Hace mucho tiempo existió un reino que ocultaba el poder dorado de los dioses. Era un lugar hermoso, de verdes bosques y enormes montañas, donde reinaba la paz.
            Pero un día fue presa de la ambición de un villano que le arrebató el poder dorado. El reino cayó en las tinieblas. Y cuando el pueblo había perdido casi toda esperanza... apareció como de la nada un joven vestido con ropas verdes.  
            Con su misteriosa espada, el joven sepultó al villano y le devolvió al reino la luz. Como venía de otra época, el pueblo le llamó 'Héroe del Tiempo'.  
            Muchos años después, cuando la historia del joven se había convertido en leyenda, en el reino volvieron a soplar vientos de tragedia... El villano que el héroe había sepultado resurgió de las profundidades de la tierra.  
            El pueblo confiaba en que el Héroe del Tiempo volvería a salvar el reino... Pero el héroe no apareció. El pueblo, indefenso ante ese enorme poder, solo podía rezar... y encomendar su destino a los dioses...».  
            ¿Qué habrá sido de aquel reino de la leyenda? Nadie lo sabe... Aunque su recuerdo se ha borrado, la leyenda aún se respira en el viento. En una remota isla, cuando los hijos varones llegan a cierta edad, lo celebran vistiéndoles con ropas verdes para que se conviertan en hombres valientes como aquel héroe de la leyenda. Aquel cuyo corazón vestía el viento verde de la pradera y cuya espada era un torbellino que disipaba las tinieblas.  
            —Prólogo de The Legend of Zelda: The Wind Waker.
            </Text>
          </Card>
          <Card>
            <Title>Wiki</Title>
            <Text onPress={() => {
              Linking.openURL('https://zelda.fandom.com/wiki/Main_Page');
            }}>https://zelda.fandom.com/wiki/Main_Page</Text>
          </Card>
        </CardContainer>
    </ImageBackground>
      </ScrollView>
  );
}
  

const CreditosPage = () => {
  return (
    <ImageBackground source={require("../img/credito.jpeg")}>
      <ScrollView >
        <CardContainer>
          <Card>
            <View style={{ marginVertical: 100}}>
            <Text style={{ textAlign: "center", fontSize: 16 }}>CRÉDITOS</Text>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Queremos agradecer a la profesora Daniela Sanchez por aceptarnos en su materia. 
              Gracias infinitas por que con ella descubri como trabajar bajo presion
              por haber dejado todo al ultimo. Esta api esta hecha con lagrimas, ansiedad, 
              desesperacion y esfuerzo. 
              Tambien, muchas gracias a Denisse Perez por motivarnos y burlase de nosotros, 
              sin ella esto no seria posible.

              Y a todos nuestros fans, muchas gracias.

            </Text>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              © 2023 Ivan Jimez Fierro -- Ronald Sesma Rosales
            </Text>
            <Text style={{ textAlign: "center", fontSize: 12 }}>
              Todos los derechos reservados.
            </Text>
            </View>
          </Card>
        </CardContainer>
      </ScrollView>
    </ImageBackground>
  );
}
  