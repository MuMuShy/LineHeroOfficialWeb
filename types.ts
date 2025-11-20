export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  affinity: 'Tech' | 'Magic' | 'Speed';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum GamePlatform {
  IOS = 'iOS',
  ANDROID = 'Android',
  STEAM = 'Steam'
}