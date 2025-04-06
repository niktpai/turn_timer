# Turn Timer App for Board Games

**Live App**: [https://turn-timer-c3aec.web.app/](https://turn-timer-c3aec.web.app/)

---

### **Overview**
The Turn Timer App is a web-based tool designed to streamline board games by keeping turns on track and providing insightful stats on gameplay. This app aims to make games more enjoyable by reducing downtime and allowing players to focus on strategy and fun.

### **Principles and Goals**
- **Simplicity**: Focus on a clean and intuitive design for ease of use.
- **Flexibility**: Allow adjustments during gameplay, such as changing turn order and time limits.
- **Professional Quality**: Create a polished product with robust functionality.
- **Accessibility**: Prioritize mobile-first design, with support for multiple devices syncing to the same game.
- **Community Focus**: Enhance the gaming experience with optional stats and history features.

---

### **Core Features**
1. **Player Management**
   - Add player names.
   - Arrange turn order dynamically.
2. **Turn Timer**
   - Start and stop timers with a single button.
   - Toggle the timer on/off while tracking accumulated time.
3. **Settings**
   - Adjust turn time limits and turn order during gameplay.
   - Add a flexible **end game** button to wrap up sessions.
4. **Multi-Device Support**
   - Sync multiple devices to a game session using room codes or QR codes.
5. **Full-Screen Mode**
   - Keep the phone awake and hide non-essentials for streamlined use.

---

### **Optional Future Enhancements**
1. **Post-Game Stats**:
   - Total time per player.
   - Longest/shortest turn durations.
   - Game session duration.
2. **Gamification**:
   - Achievements and badges like "Quickest Player."
3. **Offline Mode**:
   - Ensure functionality without a network.
4. **Sound/Vibration Notifications**:
   - Notify players when their turn starts or ends.
5. **Dark Mode**:
   - Improve visibility in low-light settings.


---

### **Tech Choices**
- **Frontend**: Next.js (React-based framework for performance and simplicity).
- **Backend**: Firebase (real-time database and authentication).
- **UI/UX**: Tailwind CSS for clean and responsive design.
- **Hosting**: Firebase Hosting or Vercel (free tiers preferred).

---

### **Development Plan**
1. **Initialize the Project**:
   - Set up a GitHub repository with a clear README and structure.
   - Initialize a Next.js project.
   - Set up Firebase or Supabase for database and real-time functionality.
2. **Build the Core MVP**:
   - Implement player management, turn timer, and basic settings.
   - Add a "Full-Screen Mode" option with wake-lock functionality.
   - Ensure a responsive, mobile-first design.
3. **Multi-Device Support**:
   - Develop room-based syncing using Firebase Firestore.
   - Add QR code generation and scanning.
4. **Polish and Iterate**:
   - Refine UI/UX and improve user flows.
   - Add optional features from the enhancements list.
5. **Testing and Deployment**:
   - Test across devices and screen sizes.
   - Deploy to Firebase Hosting or Vercel.

---

### **Priority Feature List**
1. Player Management (MVP).
2. Turn Timer (MVP).
3. Settings Adjustments (MVP).
4. Multi-Device Sync.
5. Post-Game Stats.
6. Gamification and Achievements.
7. Offline Mode and Leaderboards.

---

### **Development Workflow**
1. **Setup**:
   - Initialize GitHub repo.
   - Write the README.
   - Add issue tracking for feature development.
2. **Development**:
   - Use feature branches for isolated work.
   - Focus on one feature at a time.
   - Maintain clean commits with proper messages.
3. **Testing**:
   - Unit tests for core functions.
   - Manual testing on multiple devices.
4. **Deployment**:
   - Deploy the MVP to a hosting platform.
   - Share the app link for feedback.

---

### **Publishing Steps**
1. **GitHub**:
   - Create a public repository.
   - Push the initial Next.js setup.
   - Add a `.gitignore` file to exclude unnecessary files.
2. **Hosting**:
   - Link your repository to Firebase Hosting or Vercel.
   - Set up continuous deployment for auto-updates.
3. **Documentation**:
   - Include setup instructions in the README for contributors.
   - Add comments in the code for clarity.

---

### **Plan of Attack**
1. **Week 1**: 
   - Initialize the project and build the MVP (player management, timer, and settings).
   - Publish to a free hosting platform for early testing.
2. **Week 2**:
   - Add multi-device support.
   - Refine UI/UX for mobile.
   - Test on various devices.
3. **Week 3**:
   - Implement stats tracking and optional features.
   - Polish design and interactions.
4. **Week 4**:
   - Test thoroughly.
   - Launch officially and gather feedback.
