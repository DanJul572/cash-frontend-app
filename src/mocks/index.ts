import { requestMockScenarioConfig } from '@configs';

export const requestMockHandler = Object.values(requestMockScenarioConfig).flatMap((mock) => mock);
