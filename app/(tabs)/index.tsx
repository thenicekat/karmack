import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { getBadKarmaScore, getGoodKarmaScore } from '@/store/itemStore';

export default function Home() {
  const goodKarma = getGoodKarmaScore();
  const badKarma = getBadKarmaScore();

  // const percentGood = goodKarma / (goodKarma + badKarma) * 100;
  // const percentBad = 100 - percentGood;

  return (
    <View
      style={styles.homeScreenContainer}
    // darkColor={`rgba(${percentBad * 255 / 100},${percentGood * 255 / 100},0, 0.5)`}
    // lightColor={`rgba(${percentBad * 255 / 100},${percentGood * 255 / 100},0, 0.5)`}
    >
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
        P.S. Your data is not stored on any server, it is all stored locally on your device.
      </Text>

      <View style={{
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '80%'
      }}>
        <View>
          <Text style={styles.summaryText}>Good Karma: {goodKarma}</Text>
        </View>

        <View>
          <Text style={styles.summaryText}>Bad Karma: {badKarma}</Text>
        </View></View>
    </View >
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
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
