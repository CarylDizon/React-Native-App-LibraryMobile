import {View, Text, Button, Stylesheet} from 'react-native';
import { ScrollView } from 'react-native-web';
export default function App() {
  return(
    <View style={styles.container}> 
    <Text style={styles.text}>
      This is a test page
    </Text> 
    <Button title="Submit" onPress={() => alert('Button Pressed!')}></Button> 

    {/* <Image source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fartincontext.org%2Fmint-green-color%2F&psig=AOvVaw1qp-jgpeD8eshIYD92X6uu&ust=1755749255006000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKj0w-zBmI8DFQAAAAAdAAAAABAE'}}
      style={{width: 100, height: 100, marginTop: 20}}/> */} 
    
    <ScrollView>
      <Text>List 1</Text>
      <Text>List 2</Text>
      <Text>List 3</Text>
      <Text>List 4</Text>
      <Text>List 5</Text>
      <Text>List 6</Text>
    </ScrollView> 

    

    </View>
  );
} 

const styles = Stylesheet.create({
  container: {
    padding: 20,
    backgroundColor: '#486b3dff',
    alignItems: 'center',
  }, 

  text: {
    fontSize: 20,
    color: '#d8df76ff',
  }
});
