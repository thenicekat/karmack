import { StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { ScrollView } from 'react-native';
import { MonoText } from '@/components/StyledText';
import { getItemsFromKarmaStore, Item } from '@/store/itemStore';
import LinearGradient from 'react-native-linear-gradient';

export default function BadKarma() {
  const colorScheme = useColorScheme();
  const router = useRouter()

  const items = getItemsFromKarmaStore('badkarma')


  return (
    <View style={styles.container}>
      <MonoText style={styles.title}>Bad Karma.</MonoText>
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
              <LinearGradient colors={['#e60000', '#bb0000']} style={styles.card}>
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
              No traces of bad karma here! keep up the positive momentum!
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
