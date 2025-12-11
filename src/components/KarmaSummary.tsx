import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { GradientCard } from './GradientCard';
import type { KarmaStats } from '../types';

interface KarmaSummaryProps {
  stats: KarmaStats;
}

export const KarmaSummary: React.FC<KarmaSummaryProps> = ({ stats }) => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryRow}>
        <GradientCard type="good">
          <Text style={styles.cardEmoji}>✨</Text>
          <Text style={styles.summaryLabel}>Good</Text>
          <Text style={styles.summaryValue}>{stats.good}</Text>
        </GradientCard>

        <GradientCard type="bad" style={{ marginLeft: 12 }}>
          <Text style={styles.cardEmoji}>⚠️</Text>
          <Text style={styles.summaryLabel}>Bad</Text>
          <Text style={styles.summaryValue}>{stats.bad}</Text>
        </GradientCard>
      </View>

      <View style={styles.netContainer}>
        <Text style={styles.netLabel}>Net Karma</Text>
        <Text style={[styles.netValue, stats.net >= 0 ? styles.positive : styles.negative]}>
          {stats.net >= 0 ? '+' : ''}{stats.net}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cardEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#fff',
    opacity: 0.95,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  summaryValue: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
    marginTop: 4,
  },
  netContainer: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  netLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  netValue: {
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -1,
  },
  positive: {
    color: Colors.good,
  },
  negative: {
    color: Colors.bad,
  },
});



