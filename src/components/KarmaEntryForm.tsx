import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Colors, Space, Radius, Type } from '../constants/colors';
import type { KarmaType } from '../types';

interface KarmaEntryFormProps {
  onAddKarma: (type: KarmaType, description: string) => void;
}

export const KarmaEntryForm: React.FC<KarmaEntryFormProps> = ({ onAddKarma }) => {
  const [description, setDescription] = useState('');

  const handleAddKarma = (type: KarmaType) => {
    const trimmed = description.trim();
    if (!trimmed) {
      Alert.alert('Description required', 'Enter what happened before logging.');
      return;
    }
    onAddKarma(type, trimmed);
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>LOG SOMETHING</Text>

      <TextInput
        style={styles.input}
        placeholder="What happened?"
        placeholderTextColor={Colors.textFaint}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.badButton]}
          onPress={() => handleAddKarma('bad')}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonSign, { color: Colors.bad }]}>−</Text>
          <Text style={[styles.buttonLabel, { color: Colors.bad }]}>Bad</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.goodButton]}
          onPress={() => handleAddKarma('good')}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonSign, { color: Colors.good }]}>+</Text>
          <Text style={[styles.buttonLabel, { color: Colors.good }]}>Good</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    padding: Space.lg,
    fontSize: Type.body,
    color: Colors.text,
    minHeight: 88,
    textAlignVertical: 'top',
    backgroundColor: Colors.surface,
    marginBottom: Space.md,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: Space.sm,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Space.sm,
    paddingVertical: Space.lg,
    borderRadius: Radius.md,
    borderWidth: 1,
  },
  goodButton: {
    backgroundColor: Colors.goodSoft,
    borderColor: Colors.good,
  },
  badButton: {
    backgroundColor: Colors.badSoft,
    borderColor: Colors.bad,
  },
  buttonSign: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24,
  },
  buttonLabel: {
    fontSize: Type.body,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
