import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />

      <Text
        style={styles.introText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        This app is made to keep track of your good and bad karma. You can add and remove karma items as you see fit.
      </Text>

      <Text
        style={styles.introText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        P.S. None of your data is stored on any server, it is all stored locally on your device.
      </Text>

      {/* Add a summary card containing both good summary length and bad summary length */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '80%'
      }}>
        <View>
          <Text style={styles.summaryText}>Good Karma: 0</Text>
        </View>
        <Text
          style={{
            fontSize: 40
          }}
        >
          |
        </Text>
        <View>
          <Text style={styles.summaryText}>Bad Karma: 0</Text>
        </View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    margin: 10
  },
  summaryText: {
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    margin: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
