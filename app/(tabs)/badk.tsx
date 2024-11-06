import { StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { ScrollView } from 'react-native';
import { MonoText } from '@/components/StyledText';
import { getItemsFromKarmaStore, Item } from '@/store/itemStore';

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
              <View
                style={styles.card}
                darkColor={Colors.dark.redCardColor}
                lightColor={Colors.light.redCardColor}
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
              No traces of bad karma here! keep up the positive momentum!
            </Text>
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
