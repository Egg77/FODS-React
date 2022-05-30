import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      height: "100%",
      width: "100%",
      paddingHorizontal: 24,
      flexDirection: 'column',
    },
    
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
  
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
  
    highlight: {
      fontWeight: '700',
      fontSize: 18,
    },
  
    container: { 
      height: 50,
      width: "100%",
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
      padding: 5,
      flexDirection: "row",
      backgroundColor: 'lightgrey',
      borderBottomColor: 'white',
      borderBottomWidth: 0.5,
    },
  
    test: {
      padding: 1,
      marginLeft: 10,
      marginTop: 10,
  
    },
  
    iconcont: {
      width: 50,
      height: 40,
      justifyContent: 'center',
      paddingRight: 3,
      paddingLeft: 3,
      //backgroundColor: "blue",
    },
  
    icon: {
      width: undefined,
      height: 25,
      alignContent: 'center',
      justifyContent: 'center',
      resizeMode: 'contain',
      aspectRatio: 12 / 7,
    },
  
    sensornamecontainer: {
      height: 40,
      width: '50%',
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: 15,
      //backgroundColor: 'green',
    },
  
    sensorname: {
      fontWeight: 'bold',
      fontSize: 16,
      flexWrap: 'wrap'
    },
  
    tempcontainer: {
      flexGrow: 0.3,
      height: 40,
      width: 95,
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: 15,
      //backgroundColor: 'orange',
      alignSelf: 'flex-end',
    },
  
    temptext: {
      fontWeight: 'normal',
      fontSize: 14,

    },
  
    carrotcont: {
      height: 40,
      width: 40,
      //backgroundColor: 'yellow',
      justifyContent: 'center',
      alignContent: 'flex-end',
      paddingHorizontal: 5,
      alignSelf: 'flex-end',
    },
  
    carrot: {
      width: undefined,
      height: 25,
      resizeMode: 'contain',
      aspectRatio: 1 / 1,
    },

    detailTitleContainer: {
      flex: 4,
      justifyContent: 'center',
      alignContent: 'center',
      padding: 15,
    },

    detailname: {
      fontWeight: 'bold',
      fontSize: 16,
      alignItems: 'flex-end',
  
    },
  
    spacer: {
      height: 10,
    },

    map: {
      width: 400,
      height: 300,
      
    },
  });

  export { styles }