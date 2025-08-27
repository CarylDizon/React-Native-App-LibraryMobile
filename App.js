import {View, Text, TextInput, Button, Stylesheet} from 'react-native';
import { ScrollView } from 'react-native-web';
export default function App() {
  return(
    <View style={styles.container}> 
    <Text style={styles.text}>
      Library Mobile
    </Text> 
    <TextInput>Enter name of a book here</TextInput>
    <TextInput>Enter name of the author here</TextInput>
    <TextInput>Enter isbn here</TextInput>
    <TextInput>Enter published date here</TextInput>
    <TextInput>Enter the genre here</TextInput>
    <TextInput>Enter when the book is added here</TextInput>

    <Button title="Submit" onPress={() => alert('Book Submitted!')}></Button> 
    
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
