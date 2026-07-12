import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Space, Radius, Type } from '../constants/colors';
import type { KarmaStats } from '../types';

interface KarmaSummaryProps {
  stats: KarmaStats;
}

export const KarmaSummary: React.FC<KarmaSummaryProps> = ({ stats }) => {
  const isPositive = stats.net >= 0;
  const netColor = stats.net === 0 ? Colors.text : isPositive ? Colors.good : Colors.bad;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>NET KARMA TODAY</Text>
      <Text style={[styles.value, { color: netColor }]}>
        {isPositive && stats.net !== 0 ? '+' : ''}{stats.net}
      </Text>

      <View style={styles.splitRow}>
        <View style={styles.splitItem}>
          <Text style={styles.splitLabel}>GOOD</Text>
          <Text style={[styles.splitValue, { color: Colors.good }]}>{stats.good}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.splitItem}>
          <Text style={styles.splitLabel}>BAD</Text>
          <Text style={[styles.splitValue, { color: Colors.bad }]}>{stats.bad}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.lg,
    paddingVertical: Space.xl,
    paddingHorizontal: Space.lg,
    marginBottom: Space.xl,
    alignItems: 'center',
  },
  label: {
    fontSize: Type.micro,
    fontWeight: '600',
    letterSpacing: 2,
    color: Colors.textMuted,
    marginBottom: Space.sm,
  },
  value: {
    fontSize: Type.hero,
    fontWeight: '800',
    letterSpacing: -2,
    fontVariant: ['tabular-nums'],
    marginBottom: Space.lg,
  },
  splitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: Space.md,
  },
  splitItem: {
    flex: 1,
    alignItems: 'center',
  },
  splitLabel: {
    fontSize: Type.micro,
    letterSpacing: 1.5,
    fontWeight: '600',
    color: Colors.textMuted,
    marginBottom: Space.xs,
  },
  splitValue: {
    fontSize: Type.title,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  divider: {
    width: 1,
    height: 28,
    backgroundColor: Colors.border,
  },
});
