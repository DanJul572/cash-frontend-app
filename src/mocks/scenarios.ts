import type { HttpHandler } from 'msw';

import { authMeRequest200Mock, authMeRequest401Mock } from './auth-request-mock';

export const mockScenarios: Record<string, HttpHandler[]> = {
    'auth-me:200': authMeRequest200Mock,
    'auth-me:401': authMeRequest401Mock,
};
