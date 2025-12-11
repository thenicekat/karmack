import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { KarmaEntryCard } from './KarmaEntryCard';
import type { KarmaEntry } from '../types';

interface KarmaEntryListProps {
  entries: KarmaEntry[];
  onDeleteEntry: (id: string) => void;
}

export const KarmaEntryList: React.FC<KarmaEntryListProps> = ({ entries, onDeleteEntry }) => {
  if (entries.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyEmoji}>📝</Text>
        <Text style={styles.emptyTitle}>No entries yet today</Text>
        <Text style={styles.emptySubtitle}>Start tracking your karma!</Text>
      </View>
    );
  }

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Entries</Text>
      {sortedEntries.map(entry => (
        <KarmaEntryCard key={entry.id} entry={entry} onDelete={onDeleteEntry} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  emptyContainer: {
    backgroundColor: Colors.surface,
    padding: 48,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderStyle: 'dashed',
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});



