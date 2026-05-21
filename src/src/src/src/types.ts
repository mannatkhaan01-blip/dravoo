export interface UserProfile {
  name: string;
  avatar: string;
  isPro: boolean;
}

export interface GeneratedImage {
  id: string;
  prompt: string;
  enhancedPrompt: string;
  url: string;
  timestamp: string;
  aspectRatio: string;
  engine: string;
}

export interface TrimmerState {
  file: File | null;
  videoUrl: string | null;
  start: number;
  end: number;
  duration: number;
  isProcessing: boolean;
  isPlayingLoop: boolean;
}

export interface MemeState {
  imageFile: File | null;
  imageUrl: string | null;
  topText: string;
  bottomText: string;
  isExporting: boolean;
}

export interface SmartToolState {
  activeId: string | null;
  inputPrompt: string;
  isProcessing: boolean;
  result: string | null;
  tips: string | null;
}
