export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error?: string | null;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  disabled: boolean;
}