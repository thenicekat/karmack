import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { StorageService } from '../utils/storage';
import type { KarmaEntry, KarmaStats, KarmaType } from '../types';

export const useKarma = () => {
  const [entries, setEntries] = useState<KarmaEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      setLoading(true);
      const allEntries = await StorageService.getAllEntries();
      const todayEntries = StorageService.getTodayEntries(allEntries);
      setEntries(todayEntries);
    } catch (error) {
      console.error('Error loading entries:', error);
      Alert.alert('Error', 'Failed to load karma entries');
    } finally {
      setLoading(false);
    }
  };

  const addKarma = useCallback(
    async (type: KarmaType, description: string) => {
      const newEntry: KarmaEntry = {
        id: Date.now().toString(),
        type,
        description,
        timestamp: new Date().toISOString(),
      };

      const newEntries = [...entries, newEntry];

      try {
        const success = await StorageService.saveTodayEntries(newEntries);
        if (success) {
          setEntries(newEntries);
        } else {
          Alert.alert('Error', 'Failed to save karma entry');
        }
      } catch (error) {
        console.error('Error adding karma:', error);
        Alert.alert('Error', 'Failed to save karma entry');
      }
    },
    [entries]
  );

  const deleteEntry = useCallback(
    async (id: string) => {
      Alert.alert('Delete Entry', 'Are you sure you want to delete this karma entry?', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const newEntries = entries.filter(e => e.id !== id);
            try {
              const success = await StorageService.saveTodayEntries(newEntries);
              if (success) {
                setEntries(newEntries);
              } else {
                Alert.alert('Error', 'Failed to delete entry');
              }
            } catch (error) {
              console.error('Error deleting entry:', error);
              Alert.alert('Error', 'Failed to delete entry');
            }
          },
        },
      ]);
    },
    [entries]
  );

  const calculateStats = useCallback((): KarmaStats => {
    const good = entries.filter(e => e.type === 'good').length;
    const bad = entries.filter(e => e.type === 'bad').length;
    const net = good - bad;

    return { good, bad, net };
  }, [entries]);

  return {
    entries,
    loading,
    addKarma,
    deleteEntry,
    calculateStats,
    refresh: loadEntries,
  };
};


