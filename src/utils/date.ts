export const DateUtils = {
  formatTime(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  },

  isToday(timestamp: string): boolean {
    const today = new Date().toDateString();
    const entryDate = new Date(timestamp).toDateString();
    return entryDate === today;
  },

  getTodayString(): string {
    return new Date().toDateString();
  },
};


