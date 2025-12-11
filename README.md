# Karmack ✨

A sleek and modern React Native app to track your daily good and bad karma.

## Features

- ✨ **Beautiful UI** - Modern design with gradients and smooth animations
- ➕ **Add Good Karma** - Track positive actions throughout your day
- ➖ **Add Bad Karma** - Keep track of negative actions
- 📊 **Daily Summary** - View your good, bad, and net karma at a glance
- 📝 **Entry Management** - View all entries for today with timestamps
- 💾 **Persistent Storage** - All data saved locally using AsyncStorage
- 🗑️ **Delete Entries** - Remove entries with confirmation
- 🎨 **Clean Code** - Well-organized, modular component structure

## Project Structure

```
karmack/
├── App.js                    # Main app component
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── KarmaSummary.js  # Summary cards component
│   │   ├── KarmaEntryForm.js # Form for adding entries
│   │   └── KarmaEntryList.js # List of entries component
│   ├── hooks/                # Custom React hooks
│   │   └── useKarma.js      # Karma state management hook
│   ├── utils/                # Utility functions
│   │   ├── storage.js        # Storage service
│   │   └── date.js          # Date formatting utilities
│   └── constants/            # App constants
│       └── colors.js        # Color palette
├── package.json
├── app.json
└── babel.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the Expo development server:
```bash
npm start
```

3. Run on your device:
   - **iOS**: Press `i` in the terminal or scan the QR code with the Expo Go app
   - **Android**: Press `a` in the terminal or scan the QR code with the Expo Go app
   - **Web**: Press `w` in the terminal

## Usage

1. Enter a description of what you did in the input field
2. Tap either the "✨ Good" or "⚠️ Bad" button to add an entry
3. View your daily summary at the top showing good, bad, and net karma
4. Scroll down to see all your entries for today, sorted by most recent
5. Tap the 🗑️ icon to delete an entry (with confirmation)

## Code Quality

- **Modular Architecture** - Components are separated by concern
- **Custom Hooks** - Business logic extracted into reusable hooks
- **Utility Functions** - Common operations abstracted into utilities
- **Constants** - Centralized color palette and configuration
- **Clean Code** - Well-commented, readable, and maintainable

## Technologies Used

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and tooling
- **Expo Linear Gradient** - Beautiful gradient effects
- **AsyncStorage** - Local data persistence

## Design Philosophy

- **Modern UI** - Clean, minimalist design with gradients
- **User Experience** - Intuitive interface with clear visual feedback
- **Performance** - Optimized rendering with React hooks and memoization
- **Maintainability** - Well-structured code for easy updates and extensions
