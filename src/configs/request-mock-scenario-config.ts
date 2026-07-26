import type { HttpHandler } from 'msw';

import {
    authGetAllAlternates200Mock,
    authValidateAlternateToken200Mock,
} from '@modules/change-alternate/mocks';

import { authMeRequest401Mock } from '../mocks/auth-request-mock';
import { guestConfigRequest200Mock } from '../mocks/guest-config-mock';

export const requestMockScenarioConfig: Record<string, HttpHandler[]> = {
    'auth-me': authMeRequest401Mock,
    'auth-get-all-alternates': authGetAllAlternates200Mock,
    'auth-validate-token-alternate': authValidateAlternateToken200Mock,
    'guest-config': guestConfigRequest200Mock,
};
