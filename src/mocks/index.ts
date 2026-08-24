import type { HttpHandler } from 'msw';

import {
  changeAlternateGetUser200Mock,
  changeAlternateValidateToken200Mock,
} from '@modules/change-alternate/mocks';
import { changePasswordValidateToken200Mock } from '@modules/change-password/mocks';

import { authMeRequest401Mock } from './auth-request-mock';
import { authenticatedConfigRequest200Mock } from './authenticated-config-mock';
import { guestConfigRequest200Mock } from './guest-config-mock';
import { treeMenuRequest200Mock } from './tree-menu-mock';

const requestMockScenarioConfig: Record<string, HttpHandler[]> = {
  '/auth/me': authMeRequest401Mock,
  '/change-password/validate-token': changePasswordValidateToken200Mock,
  '/config/guest': guestConfigRequest200Mock,
  '/config/authenticated': authenticatedConfigRequest200Mock,
  '/tree-menu': treeMenuRequest200Mock,
  '/user-alternate/get-users': changeAlternateGetUser200Mock,
  '/user-alternate/validate-token': changeAlternateValidateToken200Mock,
};

export const requestMockHandler = Object.values(requestMockScenarioConfig).flatMap((mock) => mock);
