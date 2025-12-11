import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { DateUtils } from '../utils/date';
import type { KarmaEntry } from '../types';

interface KarmaEntryCardProps {
  entry: KarmaEntry;
  onDelete: (id: string) => void;
}

export const KarmaEntryCard: React.FC<KarmaEntryCardProps> = ({ entry, onDelete }) => {
  const isGood = entry.type === 'good';
  const borderColor = isGood ? Colors.good : Colors.bad;

  return (
    <View style={[styles.card, { borderLeftColor: borderColor }]}>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View style={styles.typeContainer}>
            <Text style={styles.typeEmoji}>{isGood ? '✨' : '⚠️'}</Text>
            <Text style={styles.typeText}>{isGood ? 'Good' : 'Bad'} Karma</Text>
          </View>
          <Text style={styles.timeText}>{DateUtils.formatTime(entry.timestamp)}</Text>
        </View>
        <Text style={styles.description}>{entry.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(entry.id)}
        activeOpacity={0.6}
      >
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1.5,
    borderLeftWidth: 4,
    borderColor: Colors.borderLight,
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  typeEmoji: {
    fontSize: 16,
  },
  typeText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text,
    letterSpacing: 0.3,
  },
  timeText: {
    fontSize: 12,
    color: Colors.textTertiary,
    fontWeight: '500',
  },
  description: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 22,
    letterSpacing: -0.2,
  },
  deleteButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  deleteIcon: {
    fontSize: 20,
  },
});



