import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { ScrollView } from 'react-native';
import { getItemsFromKarmaStore, Item } from '@/store/itemStore';
import LinearGradient from 'react-native-linear-gradient';

export default function GoodKarma() {
  const colorScheme = useColorScheme();
  const router = useRouter()

  const items = getItemsFromKarmaStore('goodkarma')

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
          items.length > 0 ? items.map((item: Item) => (
            <TouchableOpacity
              onPress={() => {
                router.push(`/edit/${item.id}`)
              }}
              key={item.id}
            >
              <LinearGradient colors={['#009900', '#00e600']} style={styles.card}>
                <Text style={styles.text}>
                  {item.description}
                </Text>

                <Text style={styles.text}>
                  {item.karma}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))
            :
            <Text
              style={{
                fontSize: 24,
                margin: 10,
                padding: 10,
                fontFamily: 'monospace',
                textAlign: 'center',
              }}
            >
              Nothing here yet! Here is your chance to make a positive impact!
            </Text>
        }
      </ScrollView>
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
  text: {
    fontSize: 16,
    padding: 10,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textTransform: "capitalize",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  card: {
    width: '90%',
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});