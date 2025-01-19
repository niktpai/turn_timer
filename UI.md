# Turn Timer UI Description

## Overview

The Turn Timer app is a utility designed for turn-based gameplay or collaborative tasks. The UI is clean, responsive, and easy to navigate, with an emphasis on simplicity and functionality. Below is a detailed description of the UI components and their functionalities.

---

## Home Screen

### Title Bar

- Displays the **app name** prominently at the top of the screen.
- Has a cog  on the right to access setting page

### Player List

- A scrollable list showing the **player names**.
- Player Management
  - Add or remove players. (+ at the top right of the list ) (- button next to each player name)
    - takes player name
  - Rearrange player order. (drag and drop)

    The current player's turn is indicated by a **highlighted background**.

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

### Player Management

- Add or remove players.
- Rearrange player order.

### Theme and Accessibility

- Light and dark themes.

- Font size adjustments for readability.

- High-contrast mode for accessibility.

  ### Sound Effects

- Short, customizable sounds signal the end of a turn or other significant events.

- Mute option

---

## Gameplay View

### Main Timer Section

- The current player's name is displayed at the top of the screen.
- A large digital timer is centered on the screen for clear visibility.
- The digital timer is centrally positioned with clear animations (e.g., blinking or color changes) as time runs low.
- A progress bar or circular countdown ring visually represents the time remaining.
- The next player's **name** is displayed with a lower opacity at the bottom of the screen.

### Interactive Elements

- **Start Button:** Displays until the game starts.
- **+X Buttons:**
  - Used to extend the turn time by the defined interval.
  - Multiple "+X" buttons can be configured for different intervals (e.g., "+10s", "+30s").
- **Skip Turn** 

## Notes

- setting cog icon should still be visable to click on during the game, can be more translucent though
- there should be an end game button next to the settings cog icon with confirmation dialog to make sure the user wants to end the game before moving on the the history and stats page

---

## History and Stats Page

### Turn Log

- Displays a chronological log of turns with timestamps and durations.
- Highlights skipped or extended turns for easy reference.

### Game Summary

- Shows each player’s total turn time and the sequence of turns without rankings.

---

---

This UI design prioritizes ease of use, minimizing distractions, and keeping gameplay smooth and engaging.

