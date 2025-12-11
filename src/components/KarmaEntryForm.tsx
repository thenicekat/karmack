import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Colors } from '../constants/colors';
import { GradientButton } from './GradientButton';
import type { KarmaType } from '../types';

interface KarmaEntryFormProps {
  onAddKarma: (type: KarmaType, description: string) => void;
}

export const KarmaEntryForm: React.FC<KarmaEntryFormProps> = ({ onAddKarma }) => {
  const [description, setDescription] = useState('');

  const handleAddKarma = (type: KarmaType) => {
    if (!description.trim()) {
      Alert.alert('Description Required', 'Please enter a description for your karma entry', [
        { text: 'OK' },
      ]);
      return;
    }

    onAddKarma(type, description.trim());
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Karma Entry</Text>

      <TextInput
        style={styles.input}
        placeholder="What did you do?"
        placeholderTextColor={Colors.textTertiary}
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
      />

      <View style={styles.buttonRow}>
        <GradientButton
          type="good"
          onPress={() => handleAddKarma('good')}
          label="Good"
          emoji="✨"
        />
        <View style={styles.buttonSpacer} />
        <GradientButton
          type="bad"
          onPress={() => handleAddKarma('bad')}
          label="Bad"
          emoji="⚠️"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  input: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: Colors.text,
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 16,
    backgroundColor: Colors.background,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttonSpacer: {
    width: 12,
  },
});


