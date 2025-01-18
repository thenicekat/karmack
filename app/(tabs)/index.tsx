import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, TextInput } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import { addItemToKarmaStore } from '@/store/itemStore';

export default function AddKarma() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [karmaPointsInput, setKarmaPointsInput] = useState('');
  const [contentInput, setContentInput] = useState('');

  const addItem = (key: string) => {
    if (contentInput.length === 0 || karmaPointsInput.length === 0) {
      alert('Please fill out all fields.');
      return;
    }

    addItemToKarmaStore({
      id: Date.now().toString(),
      description: contentInput,
      karma: parseInt(karmaPointsInput),
      created_at: new Date().toISOString(),
    }, key);

    setContentInput('');
    setKarmaPointsInput('');

    if (key === 'goodkarma') router.push('/goodkarma');
    if (key === 'badkarma') router.push('/badkarma');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Karmack.</Text>
      <Text
        style={styles.introText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        This app is made to keep track of your good and bad karma. You can add and remove karma items as you see fit. Track the things that happen to you and the things you do. Hope this makes a difference.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.bigInput}
          placeholder="Please enter description."
          keyboardType='default'
          value={contentInput}
          onChangeText={setContentInput}
          multiline={true}
        />
        <TextInput
          style={styles.smolInput}
          placeholder="Please enter karma points."
          keyboardType='numeric'
          value={karmaPointsInput}
          onChangeText={setKarmaPointsInput}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addItem('goodkarma');
          }}>
          <FontAwesome size={60} style={[styles.icon, {
            color: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text,
          }]} name='smile-o' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addItem('badkarma');
          }}>
          <FontAwesome size={60} style={[styles.icon, {
            color: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text,
          }]} name='meh-o' />
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginTop: 20,
    padding: 10,
  },
  introText: {
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace',
  },
  inputContainer: {
    width: '100%',
    padding: 5,
    borderRadius: 10,
  },
  smolInput: {
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'monospace',
    marginBottom: 10,
  },
  bigInput: {
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 10,
    height: 150,
    fontFamily: 'monospace',
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  icon: {
    marginBottom: -3,
  },
});