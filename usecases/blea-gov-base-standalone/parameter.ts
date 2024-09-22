import { Environment } from 'aws-cdk-lib';

export interface AppParameter {
  env?: Environment;
  envName: string;
  securityNotifyEmail: string;
  securitySlackWorkspaceId: string; // required if deploy via CLI
  securitySlackChannelId: string; // required if deploy via CLI
}

// Example
export const devParameter: AppParameter = {
  envName: 'develop',
  securityNotifyEmail: 'nanbingjun@gmail.com',
  securitySlackWorkspaceId: 'T0469K9DY21',
  securitySlackChannelId: 'C048Q97BYHG',
  // env: { account: '123456789012', region: 'ap-northeast-1' },
};
