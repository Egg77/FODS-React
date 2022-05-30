/* eslint-disable react-native/no-inline-styles */
/**
 * FODS React Native App - ENEL 500
 *
 * @format
 */

/* FODS React Native App - ENEL 500 - Written by: Patrick Robert Willmann

Group Members: Nooreldeen Abdallah, Peter Boonstra, Shelby Herle, Nikhil Naikar, Patrick Willmann

This is the main entry-point for the React Native app after index.js. All view code is in here, as well as a few methods to grab data from FODS_Node_Server and spit it into the views.

@TODO:
- Add renaming functionality detail view (same deal - connect to Node Update function)
- Add Expo push notifications: https://docs.expo.dev/push-notifications/overview/

*/

import React, { 
  useEffect, 
  Node,
  useState,
} from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { Box, FlatList, Center, NativeBaseProvider } from "native-base";
import {
  // SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import MapView from 'react-native-maps';
import Slider from '@react-native-community/slider';

import { styles } from './fods_styles';

const Stack = createNativeStackNavigator();

// The main App entry point and view code
const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
          options = {{ title: 'FODS' }} />
        <Stack.Screen
          name = "Detail"
          component = {DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Renders the Home Screen (Summary View) page and calls the SensorList() function to populate the list
const HomeScreen = ({ navigation }): Node => { 

  useEffect(() => {
    console.log("Starting...")
      
    }, []);


  return (
      <View style={styles.sectionContainer}>
        <StatusBar />
        <Text style={styles.sectionTitle}>Summary</Text>
        <View style={styles.spacer} />
        <SensorList />
      </View>
  );
};

// Renders the Detail Screen for a single sensor
const DetailScreen = ({ navigation, route }): Node => {

  const [EpID, setEpID] = useState('');
  const [Name, setName] = useState('');
  const [WarningSlider, setWarningSlider] = useState('');
  const [CriticalSlider, setCriticalSlider] = useState('');
  
  // Saves Critical Temperature, Warning Temperature, and Sensor Name to database
  const SaveSensorData = async (id, epName, criticalSlider, warningSlider) => {
    console.log("EpID: " + EpID + ", " + "EpName: " + Name + ", " + "CriticalTemp: " + CriticalSlider + ", " + "WarningSlider: " + WarningSlider)
    await fetch("http://192.168.1.109:3000/FODS_Node_Server/" + EpID, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { //apparently both JSON.stringify() and String() functions are necessary here
        "EpName": String(Name), 
        "CriticalTemp": String(CriticalSlider), 
        "WarningTemp": String(WarningSlider)
      })
    })
    .then(response => response.text()) 
    .then(serverResponse => console.log(serverResponse))
  };

  useEffect(() => {
    console.log("Entering Detail View")
    },[]);

  useEffect(() => {
      setEpID(route.params.id);
      // console.log(EpID)
    },[]);

  useEffect(() => {
    setName(route.params.name);
    // console.log(Name)
  },[]);

  useEffect(() => {
    setWarningSlider(route.params.WarningTemp);
    // console.log(WarningSlider)
    setCriticalSlider(route.params.CriticalTemp);
    // console.log(CriticalSlider)
  },[]);

  return (
    <View style={styles.test}>
      <StatusBar />

      <View style={[styles.container, {backgroundColor: 'white'}]}>
        <View style={styles.iconcont}>
          <Image style={styles.icon} source={require('./Images/Icons/PushBoyClassic.png')} />
        </View>
        <View style={styles.sensornamecontainer}>
          <TextInput style={styles.sensorname} 
                     value={Name} 
                     onChangeText={(textValue) => setName(textValue)}
                     autoCapitalize= 'words'
                     />
          {/* <Text style={styles.sensorname}>{route.params.name}</Text> */}
        </View>
      </View>

      <View style={styles.spacer}/>
      <Text>Temperature: {route.params.temp}ºC</Text>
      <Text>Battery Level: {route.params.batterylife}</Text>
      <Text>Location: {route.params.Latitude}, {route.params.Longitude}</Text>
      <Text>Last Updated: {route.params.timeStamp}</Text>
      <View style={styles.spacer}/>

      <Text style={styles.highlight}>Location</Text>
      <View style={styles.spacer}/>
      <MapView style={styles.map}
               mapType={"hybrid"}
               region={{latitude: Number(route.params.Latitude),          
                        longitude: Number(route.params.Longitude),
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003,}}>
        <MapView.Marker
              key={route.params.ID}
              title={route.params.EPName}
              coordinate={{ latitude : Number(route.params.Latitude) , longitude : Number(route.params.Longitude) }}/>
      </MapView>
      <View style={styles.spacer}/>

      <Text style={styles.highlight}>Sensor Settings</Text>
      <View style={styles.spacer}/>
      <Text>Warning Temperature: {WarningSlider}ºC</Text>
      <Slider
        style={{width: 400, height: 50}}
        minimumValue={20}
        maximumValue={300}
        step={5}
        value = {WarningSlider}
        onValueChange={
          (sliderValue) => setWarningSlider(sliderValue)
        }
        minimumTrackTintColor="#28A745"
        maximumTrackTintColor="#000000"
      />
      <View style={styles.spacer} />
      <Text>Critical Temperature: {CriticalSlider}ºC</Text>
      <Slider
        style={{width: 400, height: 50}}
        minimumValue={20}
        maximumValue={300}
        step={5}
        value = {CriticalSlider}
        onValueChange={
          (sliderValue) => setCriticalSlider(sliderValue)
        }
        minimumTrackTintColor="#28A745"
        maximumTrackTintColor="#000000"
      />
      <View style={styles.spacer} />
      <Button title="Save Settings"
              onPress={() => SaveSensorData(id, Name, CriticalSlider, WarningSlider)} />
      <View style={styles.spacer}/>

    </View>

  );
};


// Responsible for retrieving all data from the Node.js server
function SensorList() {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); //this is a hook that allows the navigation controller to be accessed within this function
  
  const fetchData = async () => {
    const resp = await fetch("http://192.168.1.109:3000/FODS_Node_Server/");
    // const resp = await fetch("http://172.20.10.2:3000/FODS_Node_Server/");
    const temp = await resp.json();
    const data = temp.data
    setData(data);
    console.log(data)
    setLoading(false);
  };

  // Fetches new data every 10 seconds
  // @TODO: This is still waiting 10 seconds on first load before being called - make it not do that!
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
      
    }, []);

  //Renders each sensor in Summary view
  const renderItem = ({item}): Node => {
      return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Detail', { name: item.EpName, id: item.ID, batterylife: item.BatteryLife, Latitude: item.Latitude, Longitude: item.Longitude, temp: item.Temp, CriticalTemp: item.CriticalTemp, WarningTemp: item.WarningTemp, timeStamp: item.LastUpdated })}>

          <View style={styles.container}>
            <View style={styles.iconcont}>
              <Image style={styles.icon} source={require('./Images/Icons/PushBoyClassic.png')} />
            </View>
            <View style={styles.sensornamecontainer}>
              <Text style={styles.sensorname}>{item.EpName}</Text>
            </View>
            <View style={styles.tempcontainer}>
              <Text style={styles.temptext}>{item.Temp}ºC</Text>
            </View>
            <View style={styles.carrotcont}>
              <Image source={require('./Images/Icons/carrot.png')} style={styles.carrot}/>
            </View>
          </View> 

        </TouchableOpacity>
        );
  };

  return (
      <NativeBaseProvider>
      <Center flex={1}>
          {loading && <Box>Loading...</Box>}
          {data && (
          <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.ID}
          />
          )}
      </Center>
      </NativeBaseProvider>
  );

};

export default App;