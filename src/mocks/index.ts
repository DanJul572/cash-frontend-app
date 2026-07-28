import type { HttpHandler } from 'msw';

import {
    authGetAllAlternates200Mock,
    authValidateAlternateToken200Mock,
} from '@modules/change-alternate/mocks';

import { authMeRequest401Mock } from './auth-request-mock';
import { guestConfigRequest200Mock } from './guest-config-mock';

const requestMockScenarioConfig: Record<string, HttpHandler[]> = {
    '/auth/me': authMeRequest401Mock,
    '/auth/user-alternate/get-users': authGetAllAlternates200Mock,
    '/auth/user-alternate/validate-token': authValidateAlternateToken200Mock,
    '/config/guest': guestConfigRequest200Mock,
};

export const requestMockHandler = Object.values(requestMockScenarioConfig).flatMap((mock) => mock);
