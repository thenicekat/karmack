import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Space, Radius, Type } from '../constants/colors';
import { DateUtils } from '../utils/date';
import type { KarmaEntry } from '../types';

interface KarmaEntryCardProps {
  entry: KarmaEntry;
  onDelete: (id: string) => void;
}

export const KarmaEntryCard: React.FC<KarmaEntryCardProps> = ({ entry, onDelete }) => {
  const isGood = entry.type === 'good';
  const accent = isGood ? Colors.good : Colors.bad;
  const soft = isGood ? Colors.goodSoft : Colors.badSoft;
  const sign = isGood ? '+' : '−';

  return (
    <View style={styles.card}>
      <View style={[styles.rail, { backgroundColor: accent }]} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.description} numberOfLines={3}>
            {entry.description}
          </Text>
          <View style={[styles.chip, { backgroundColor: soft }]}>
            <Text style={[styles.chipText, { color: accent }]}>{sign}1</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.time}>{DateUtils.formatTime(entry.timestamp)}</Text>
          <TouchableOpacity
            onPress={() => onDelete(entry.id)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            activeOpacity={0.6}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Space.sm,
    overflow: 'hidden',
  },
  rail: {
    width: 3,
  },
  content: {
    flex: 1,
    padding: Space.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Space.md,
  },
  description: {
    flex: 1,
    fontSize: Type.body,
    color: Colors.text,
    lineHeight: 21,
    fontWeight: '500',
  },
  chip: {
    borderRadius: Radius.sm,
    paddingHorizontal: Space.sm,
    paddingVertical: 2,
    minWidth: 36,
    alignItems: 'center',
  },
  chipText: {
    fontSize: Type.small,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Space.md,
  },
  time: {
    fontSize: Type.micro,
    color: Colors.textFaint,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  deleteText: {
    fontSize: Type.micro,
    color: Colors.textMuted,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
