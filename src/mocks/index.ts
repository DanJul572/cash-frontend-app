import type { HttpHandler } from 'msw';

import {
    authGetAllAlternates200Mock,
    authValidateAlternateToken200Mock,
} from '@modules/change-alternate/mocks';
import { authValidatePasswordToken200Mock } from '@modules/change-password/mocks';

import { authMeRequest401Mock } from './auth-request-mock';
import { guestConfigRequest200Mock } from './guest-config-mock';

const requestMockScenarioConfig: Record<string, HttpHandler[]> = {
    '/auth/me': authMeRequest401Mock,
    '/change-password/validate-token': authValidatePasswordToken200Mock,
    '/config/guest': guestConfigRequest200Mock,
    '/user-alternate/get-users': authGetAllAlternates200Mock,
    '/user-alternate/validate-token': authValidateAlternateToken200Mock,
};

export const requestMockHandler = Object.values(requestMockScenarioConfig).flatMap((mock) => mock);
