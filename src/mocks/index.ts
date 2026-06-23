import { requestMockScenarioConfig } from '@configs';

import { mockScenarios } from './scenarios';

export const requestMockHandler = requestMockScenarioConfig.flatMap((key) => {
    const mock = mockScenarios[key];
    if (!mock) {
        console.warn(`[MSW] Scenario "${key}" not found.`);
        return [];
    }
    return mock;
});
