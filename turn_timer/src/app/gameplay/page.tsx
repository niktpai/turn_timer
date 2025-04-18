"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Timer from "@/components/Timer";
import ControlButtons from "@/components/ControlButtons";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useSettings } from "@/contexts/SettingsContext";
import { usePlayers } from "@/contexts/PlayerContext";

function GameplayContent() {
  const router = useRouter();
  const { settings } = useSettings();
  const { players } = usePlayers();
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.turnDuration);

  // Update state when settings change
  useEffect(() => {
    setIsRunning(settings.autoStart);
    setTimeLeft(settings.turnDuration);
  }, [settings]);

  // Ensure we have valid player indices
  const currentPlayer = players[currentPlayerIndex % players.length];
  const nextPlayer = players[(currentPlayerIndex + 1) % players.length];
  const previousPlayer =
    players[(currentPlayerIndex - 1 + players.length) % players.length];
  // Update component when players or current player changes
  useEffect(() => {
    if (currentPlayerIndex >= players.length) {
      setCurrentPlayerIndex(0);
    }
  }, [currentPlayerIndex, players]);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const updateToNextPlayer = () => {
    const nextIndex = (currentPlayerIndex + 1) % players.length;
    setCurrentPlayerIndex(nextIndex);
    setTimeLeft(settings.turnDuration);
    setIsPaused(false);
    setIsRunning(settings.autoStart);
  };

  const updateToPreviousPlayer = () => {
    const prevIndex =
      (currentPlayerIndex - 1 + players.length) % players.length;
    setCurrentPlayerIndex(prevIndex);
    setTimeLeft(settings.turnDuration);
    setIsPaused(false);
    setIsRunning(settings.autoStart);
  };

  const handleAddTime = () => {
    setTimeLeft((prevTime) => prevTime + settings.addTimeInterval);
  };

  const handleTimeUp = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setIsPaused(false);
    updateToNextPlayer();
  };

  const handleNextTurn = () => {
    updateToNextPlayer();
  };

  const handlePreviousTurn = () => {
    updateToPreviousPlayer();
  };

  const handleEndGame = () => {
    router.push("/history");
  };

  if (!players || players.length === 0) {
    return (
      <div className="text-center p-4 space-y-4">
        <div>No players available. Please add players in the homepage.</div>
        <Button onClick={() => router.push("/")}>Go to Homepage</Button>
      </div>
    );
  }

  if (!currentPlayer || !nextPlayer || !previousPlayer) {
    return <div className="text-center p-4">Loading players...</div>;
  }

  return (
    <Layout title={`${currentPlayer.name}'s Turn`}>
      <div className="space-y-8">
        <Timer
          duration={settings.turnDuration}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          onTimeUp={handleTimeUp}
          isRunning={isRunning}
        />
        <ControlButtons
          onStart={handleStart}
          onAddTime={handleAddTime}
          onPause={handlePause}
          isRunning={isRunning}
          isPaused={isPaused}
          addTimeInterval={settings.addTimeInterval}
          autoStart={settings.autoStart}
        />
        <div className="text-center text-muted-foreground">
          Next Player: {nextPlayer.name}
          <br />
          Previous Player: {previousPlayer.name}
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Button onClick={handlePreviousTurn} size="lg">
            Previous Turn
          </Button>
          <Button onClick={handleNextTurn} size="lg">
            Next Turn
          </Button>
        </div>
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">End Game</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to end the game?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleEndGame}>
                  End Game
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </Layout>
  );
}

export default function Gameplay() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameplayContent />
    </Suspense>
  );
}
