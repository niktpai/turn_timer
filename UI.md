# Turn Timer UI Description

## Overview

The Turn Timer app is a utility designed for turn-based gameplay or collaborative tasks. The UI is clean, responsive, and easy to navigate, with an emphasis on simplicity and functionality. Below is a detailed description of the UI components and their functionalities.

---

## Home Screen

### Title Bar

- Displays the **app name** prominently at the top of the screen.
- Has a cog on the right to access the settings page.

### Player List

- A scrollable list showing the **player names**.
- **Player Management:**
  - Add or remove players (+ at the top right of the list, - button next to each player name).
    - Takes player name.
  - Rearrange player order (drag and drop) to define the turn order.
- The current player's turn is indicated by a **highlighted background**.

### Control Buttons

- **Start Button:**
  - Displays prominently until the game has started.
  - Replaced with additional controls once the game begins.

---

## Settings Page

### Timer Settings

- **Auto Start Checkbox:**
  - When enabled (default), the next turn and timer start immediately after the current turn ends.
- **Add Time Interval:**
  - Allows users to define the interval (X seconds) added to the turn time via the "+X" button.
- **Turn Timer Duration:**
  - Allows users to set the duration of each turn.

### Player Management

- Add or remove players.
- Display the current turn order as a list of player names (no ability to change the order).
- Save the current players and their order so they can be redisplayed in the settings page.

### Theme and Accessibility

- Light and dark themes.
- Font size adjustments for readability.
- High-contrast mode for accessibility.

### Sound Effects

- Short, customizable sounds signal the end of a turn or other significant events.
- Mute option.

### Navigation

- Hitting the cog icon while in the settings page will exit the settings without saving changes and return to the active game without resetting the timer.

---

## Gameplay View

### Main Timer Section

- The current player's **name** is displayed at the top of the screen in the header.
- A large digital timer is centered on the screen for clear visibility.
- The digital timer is centrally positioned with clear animations (e.g., blinking or color changes) as time runs low.
- A progress bar or circular countdown ring visually represents the time remaining.
- The next player's **name** is displayed with a lower opacity at the bottom of the screen.

### Interactive Elements

- **Start Button:** The timer starts automatically when entering gameplay mode.
- **Next Turn Button:**
  - A primary button that ends the current player's turn and starts the next turn.
- **+X Button:**
  - Used to extend the turn time by the defined interval specified in the settings page.
- **Skip Turn:** Resets the timer for the current player and moves to the next player.

### Notes

- The settings cog icon should still be visible to click on during the game, but can be more translucent.
- There should be an end game button next to the settings cog icon with a confirmation dialog to ensure the user wants to end the game before moving on to the history and stats page.

---

## History and Stats Page

### Turn Log

- Displays a chronological log of turns with timestamps and durations.
- Highlights skipped or extended turns for easy reference.

### Game Summary

- Shows each player’s total turn time and the sequence of turns without rankings.

### Navigation

- At the bottom of the page, there is a **Start New Game** button that takes the user back to the main page.

---

This UI design prioritizes ease of use, minimizing distractions, and keeping gameplay smooth and engaging.

