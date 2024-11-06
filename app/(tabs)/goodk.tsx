import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { ScrollView } from 'react-native';

export default function GoodKarma() {
  const colorScheme = useColorScheme();
  const router = useRouter()

  const items = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description 1',
      karma: 'Good',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description 2',
      karma: 'Good',
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Description 3',
      karma: 'Good',
    },
    {
      id: 4,
      title: 'Item 1',
      description: 'Description 1',
      karma: 'Good',
    },
    {
      id: 5,
      title: 'Item 2',
      description: 'Description 2',
      karma: 'Good',
    },
    {
      id: 6,
      title: 'Item 3',
      description: 'Description 3',
      karma: 'Good',
    },
    {
      id: 7,
      title: 'Item 1',
      description: 'Description 1',
      karma: 'Good',
    },
    {
      id: 8,
      title: 'Item 2',
      description: 'Description 2',
      karma: 'Good',
    },
    {
      id: 9,
      title: 'Item 3',
      description: 'Description 3',
      karma: 'Good',
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good Karma.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />

      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {
          items.length > 0 ? items.map((item) => (
            <View
              style={styles.card}
              darkColor={Colors.dark.greenCardColor}
              lightColor={Colors.light.greenCardColor}
              key={item.id}
            >
              <Text
                style={{
                  fontSize: 18,
                }}>
                {item.description}
              </Text>
            </View>
          ))
            : <Text>You do not have any Good Karma. Good going so far!</Text>
        }
      </ScrollView>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: colorScheme === 'dark' ? Colors.dark.buttonColor : Colors.light.buttonColor,
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
        }}
        onPress={() => {
          router.push('/add')
        }}
      >
        <FontAwesome name="plus" size={28} color={colorScheme === "dark" ? 'white' : 'black'} />
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    padding: 10,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '80%',
  }
});
