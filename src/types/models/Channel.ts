export interface Channel {
  id: string;
  channelName: string;
  svg: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type Channels = Channel[];
