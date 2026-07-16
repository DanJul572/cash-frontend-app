import type { HttpHandler } from 'msw';

import { authGetAllAlternates200Mock } from '@modules/change-alternate/mocks';

import { authMeRequest200Mock, authMeRequest401Mock } from './auth-request-mock';

export const mockScenarios: Record<string, HttpHandler[]> = {
    'auth-get-all-alternates:200': authGetAllAlternates200Mock,
    'auth-me:200': authMeRequest200Mock,
    'auth-me:401': authMeRequest401Mock,
};
