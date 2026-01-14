import { createContext, useContext, useState, ReactNode } from "react";
import { QuizSession, Question } from "../types";
import { useAuth } from "./AuthContext";

interface GameContextType {
  currentSession: QuizSession | null;
  startQuiz: (lessonId: string, questions: Question[]) => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  resetQuiz: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(
    null
  );
  const { updateUserProgress } = useAuth();

  const startQuiz = (lessonId: string, questions: Question[]) => {
    const session: QuizSession = {
      lessonId,
      questions,
      currentQuestionIndex: 0,
      score: 0,
      answers: new Array(questions.length).fill(null),
      startedAt: new Date(),
    };
    setCurrentSession(session);
  };

  const answerQuestion = (answerIndex: number) => {
    if (!currentSession) return;

    const newAnswers = [...currentSession.answers];
    newAnswers[currentSession.currentQuestionIndex] = answerIndex;

    const currentQuestion =
      currentSession.questions[currentSession.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    setCurrentSession({
      ...currentSession,
      answers: newAnswers,
      score: isCorrect
        ? currentSession.score + currentQuestion.xpReward
        : currentSession.score,
    });
  };

  const nextQuestion = () => {
    if (!currentSession) return;

    setCurrentSession({
      ...currentSession,
      currentQuestionIndex: currentSession.currentQuestionIndex + 1,
    });
  };

  const finishQuiz = () => {
    if (!currentSession) return;

    // Calcular quantas questões foram respondidas corretamente
    const correctAnswers = currentSession.answers.filter(
      (answer, index) =>
        answer === currentSession.questions[index].correctAnswer
    ).length;

    const totalQuestions = currentSession.questions.length;

    // Salvar progresso do usuário
    updateUserProgress(currentSession.lessonId, correctAnswers, totalQuestions);

    setCurrentSession({
      ...currentSession,
      completedAt: new Date(),
    });
  };

  const resetQuiz = () => {
    setCurrentSession(null);
  };

  return (
    <GameContext.Provider
      value={{
        currentSession,
        startQuiz,
        answerQuestion,
        nextQuestion,
        finishQuiz,
        resetQuiz,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within GameProvider");
  }
  return context;
}
