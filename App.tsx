import React, { useMemo } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { useKarma } from './src/hooks/useKarma';
import { KarmaSummary } from './src/components/KarmaSummary';
import { KarmaEntryForm } from './src/components/KarmaEntryForm';
import { KarmaEntryList } from './src/components/KarmaEntryList';
import { Colors } from './src/constants/colors';

export default function App() {
  const { entries, addKarma, deleteEntry, calculateStats } = useKarma();
  const stats = useMemo(() => calculateStats(), [calculateStats]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Karmack</Text>
          <Text style={styles.subtitle}>Track your daily karma</Text>
        </View>

        <KarmaSummary stats={stats} />
        <KarmaEntryForm onAddKarma={addKarma} />
        <KarmaEntryList entries={entries} onDeleteEntry={deleteEntry} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 8,
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
    letterSpacing: -1.5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});



