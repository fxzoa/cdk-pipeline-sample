import { Environment } from 'aws-cdk-lib';

// Parameters for Application
export interface AppParameter {
  env?: Environment;
  envName: string;
  monitoringNotifyEmail: string;
  monitoringSlackWorkspaceId: string;
  monitoringSlackChannelId: string;
  vpcCidr: string;
  dashboardName: string;

  // -- Sample to use custom domain on CloudFront
  // hostedZoneId: string;
  // domainName: string;
  // cloudFrontHostName: string;
}

// Parameters for Pipelines
// You can use the same account or a different account than the application account.
// If you use independent account for pipeline, you have to bootstrap guest accounts with `--trust`.
// See: https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html
export interface PipelineParameter {
  env: Environment; // required
  envName: string;
  sourceRepository: string;
  sourceBranch: string;
  sourceConnectionArn: string;
}

// Parameters for Dev Account
export const devParameter: AppParameter = {
  env: {
    // account: '111111111111',
    // region: 'ap-northeast-1',
  //  region: 'us-east-1',  // 米国東部 (バージニア北部)
    region: 'us-east-2',  // 米国東部 (オハイオ)

  },
  envName: 'dev',
  monitoringNotifyEmail: 'nan.bingjun@shinko-1930.co.jp',
  monitoringSlackWorkspaceId: 'T0469K9DY21',
  monitoringSlackChannelId: 'C048Q97BYHG',
  vpcCidr: '10.100.0.0/16',
  dashboardName: 'BLEA-ECS-App-Sample',

  // -- Sample to use custom domain on CloudFront
  // hostedZoneId: 'Z00000000000000000000',
  // domainName: 'example.com',
  // cloudFrontHostName: 'www',
};

// Parameters for Pipeline Account
export const devPipelineParameter: PipelineParameter = {
  env: {
    // account: '123456789012',
    // region: 'ap-northeast-1',
    region: 'us-east-2',
  },
  envName: 'DevPipeline',
  sourceRepository: 'fxzoa/cdk-pipeline-sample',
  sourceBranch: 'main',
  sourceConnectionArn:
    'arn:aws:codestar-connections:us-east-2:818740031270:connection/b51e4031-9512-4197-a73c-80cc67ee89a3',
};
