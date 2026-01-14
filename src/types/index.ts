export interface User {
  id: string;
  name: string;
  email: string;
  level: number;
  xp: number;
  streak: number;
  avatarUrl?: string;
  completedLessons?: LessonProgress[];
}

export interface LessonProgress {
  lessonId: string;
  correctAnswers: number;
  totalQuestions: number;
  completedAt: Date;
}

export interface Question {
  id: string;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  xpReward: number;
}

export interface Progress {
  userId: string;
  completedLessons: string[];
  currentStreak: number;
  totalXp: number;
  level: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: Question[];
  isLocked: boolean;
  xpRequired: number;
}

export interface QuizSession {
  lessonId: string;
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[];
  startedAt: Date;
  completedAt?: Date;
}
