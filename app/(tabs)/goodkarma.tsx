import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { ScrollView } from 'react-native';
import { getItemsFromKarmaStore, Item } from '@/store/itemStore';

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
              <View
                style={styles.card}
                darkColor={Colors.dark.success}
                lightColor={Colors.light.success}
              >
                <Text style={styles.text}>
                  {item.description}
                </Text>

                <Text style={styles.text}>
                  {item.karma}
                </Text>
              </View>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});