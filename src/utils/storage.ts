import AsyncStorage from '@react-native-async-storage/async-storage';
import type { KarmaEntry } from '../types';

const STORAGE_KEY = '@karmack:entries';

export const StorageService = {
  async getAllEntries(): Promise<KarmaEntry[]> {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading entries:', error);
      return [];
    }
  },

  async saveAllEntries(entries: KarmaEntry[]): Promise<boolean> {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
      return true;
    } catch (error) {
      console.error('Error saving entries:', error);
      return false;
    }
  },

  getTodayEntries(entries: KarmaEntry[]): KarmaEntry[] {
    const today = new Date().toDateString();
    return entries.filter(entry => {
      const entryDate = new Date(entry.timestamp).toDateString();
      return entryDate === today;
    });
  },

  async saveTodayEntries(todayEntries: KarmaEntry[]): Promise<boolean> {
    try {
      const allEntries = await this.getAllEntries();
      const today = new Date().toDateString();
      
      const filteredEntries = allEntries.filter(entry => {
        const entryDate = new Date(entry.timestamp).toDateString();
        return entryDate !== today;
      });
      
      const updatedEntries = [...filteredEntries, ...todayEntries];
      return await this.saveAllEntries(updatedEntries);
    } catch (error) {
      console.error('Error saving today entries:', error);
      return false;
    }
  },
};


