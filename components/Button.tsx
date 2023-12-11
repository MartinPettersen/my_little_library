import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
type Props = {
    buttonLabel: string,
    nav: string,
}

export default function Button({buttonLabel, nav}: Props) {

    return (
            <Link href={'/' + nav} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>

                        {buttonLabel}
                    </Text>
                </Pressable>
            </Link>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3f3f46',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
  
    button: {
      backgroundColor: '#71717a',
      width: '80%',
      aspectRatio: 2.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 50,
    }
  });
  