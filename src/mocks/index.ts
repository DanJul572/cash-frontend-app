import type { HttpHandler } from 'msw';

import {
    changeAlternateGetUser200Mock,
    changeAlternateValidateToken,
} from '@modules/change-alternate/mocks';
import { changePasswordValidateToken200Mock } from '@modules/change-password/mocks';

import { authMeRequest401Mock } from './auth-request-mock';
import { guestConfigRequest200Mock } from './guest-config-mock';

const requestMockScenarioConfig: Record<string, HttpHandler[]> = {
    '/auth/me': authMeRequest401Mock,
    '/change-password/validate-token': changePasswordValidateToken200Mock,
    '/config/guest': guestConfigRequest200Mock,
    '/user-alternate/get-users': changeAlternateGetUser200Mock,
    '/user-alternate/validate-token': changeAlternateValidateToken,
};

export const requestMockHandler = Object.values(requestMockScenarioConfig).flatMap((mock) => mock);
