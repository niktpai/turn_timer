#!/bin/bash

# Exit on error
set -e

# Check if user is logged in to Firebase
firebase projects:list > /dev/null 2>&1
if [ $? -ne 0 ]; then
  echo "🔑 Firebase login required..."
  firebase login
fi

# Change to the correct directory
echo "📂 Changing to project directory..."
cd turn_timer

echo "🔨 Building Next.js application..."
npm run build

echo "🚀 Deploying to Firebase..."
firebase deploy --project turn-timer-c3aec

echo "✅ Deployment complete!" 