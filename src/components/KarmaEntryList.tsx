import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Space, Radius, Type } from '../constants/colors';
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
        <Text style={styles.emptyTitle}>No entries yet today</Text>
        <Text style={styles.emptySubtitle}>
          Log the good and the bad. It compounds.
        </Text>
      </View>
    );
  }

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>TODAY · {entries.length}</Text>
      {sortedEntries.map(entry => (
        <KarmaEntryCard key={entry.id} entry={entry} onDelete={onDeleteEntry} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Space.xl,
  },
  label: {
    fontSize: Type.micro,
    fontWeight: '600',
    letterSpacing: 2,
    color: Colors.textMuted,
    marginBottom: Space.sm,
    marginLeft: Space.xs,
  },
  emptyContainer: {
    paddingVertical: Space.xxl,
    paddingHorizontal: Space.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    borderStyle: 'dashed',
    alignItems: 'center',
    marginBottom: Space.xl,
  },
  emptyTitle: {
    fontSize: Type.body,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: Space.xs,
  },
  emptySubtitle: {
    fontSize: Type.small,
    color: Colors.textMuted,
    textAlign: 'center',
  },
});
