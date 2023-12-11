import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';


export default function Home() {
  return (
    <View style={styles.container}>
      
      <Button buttonLabel='My Library' nav='library'/>
      <Button buttonLabel='Add Book' nav='addBook'/>
      <Button buttonLabel='Share' nav='share'/>
      <Button buttonLabel='About' nav='about'/>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f3f46',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },


});
