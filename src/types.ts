/**
 * Enterprise Employee Assistant TypeScript Type Definitions
 */

export interface User {
  email: string;
  name?: string;
  role: 'admin' | 'employee';
}

export interface DocumentSummary {
  executive: string;
  detailed: string;
  bulletPoints: string[];
}

export interface DocumentMetadata {
  importantDates: string[];
  contactInfo: string[];
  policyNumbers: string[];
  actionItems: string[];
  entities: string[];
}

export interface EnterpriseDocument {
  id: string;
  name: string;
  type: 'pdf' | 'docx' | 'txt';
  size: number;
  uploadedAt: string;
  charCount: number;
  content: string; // Plaintext content extracted
  summary?: DocumentSummary;
  keywords?: string[];
  metadata?: DocumentMetadata;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  moderated?: boolean;
  warning?: string;
  feedback?: 'up' | 'down';
  feedbackComments?: string;
  sourceDocuments?: string[]; // IDs or names of docs used in RAG
  topics?: string[];
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  messages: ChatMessage[];
}

export interface UserActivityLog {
  id: string;
  timestamp: string;
  userEmail: string;
  action: string; // e.g. "LOGIN", "UPLOAD_DOC", "ASK_QUERY", "LEAVE_FEEDBACK"
  details: string;
}

export interface AdminAnalytics {
  totalUsers: number;
  totalDocuments: number;
  totalQueries: number;
  moderationBlocks: number;
  ratingScore: number; // percentage of upvotes
  topicsCount: { topic: string; count: number }[];
  feedbackList: { id: string; query: string; response: string; feedback: 'up' | 'down'; comment?: string; timestamp: string }[];
}

export interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  version: string;
  uptime: number;
  geminiConnected: boolean;
}
