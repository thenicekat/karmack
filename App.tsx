import React, { useMemo } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { useKarma } from './src/hooks/useKarma';
import { KarmaSummary } from './src/components/KarmaSummary';
import { KarmaEntryForm } from './src/components/KarmaEntryForm';
import { KarmaEntryList } from './src/components/KarmaEntryList';
import { Colors, Space, Type } from './src/constants/colors';

export default function App() {
  const { entries, addKarma, deleteEntry, calculateStats } = useKarma();
  const stats = useMemo(() => calculateStats(), [calculateStats]);
  const today = useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      }),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.title}>karmack</Text>
          <Text style={styles.subtitle}>{today}</Text>
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
    padding: Space.lg,
    paddingBottom: Space.xxl,
  },
  header: {
    marginBottom: Space.xl,
    marginTop: Space.sm,
  },
  title: {
    fontSize: Type.display,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -1.5,
  },
  subtitle: {
    fontSize: Type.small,
    color: Colors.textMuted,
    fontWeight: '500',
    marginTop: 2,
    letterSpacing: 0.2,
  },
});
