import type { HttpHandler } from 'msw';

import {
    authGetAllAlternates200Mock,
    authValidateAlternateToken200Mock,
} from '@modules/change-alternate/mocks';

import { authMeRequest200Mock, authMeRequest401Mock } from './auth-request-mock';
import { guestConfigRequest200Mock, guestConfigRequest500Mock } from './guest-config-mock';

export const mockScenarios: Record<string, HttpHandler[]> = {
    'auth-get-all-alternates:200': authGetAllAlternates200Mock,
    'auth-validate-token-alternate:200': authValidateAlternateToken200Mock,
    'auth-me:200': authMeRequest200Mock,
    'auth-me:401': authMeRequest401Mock,
    'guest-config:200': guestConfigRequest200Mock,
    'guest-config:500': guestConfigRequest500Mock,
};
