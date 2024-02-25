import { persistentAtom } from '@nanostores/persistent';
import type { User } from '../interfaces/User';

interface AuthState {
  user: User;
  token: string;
}

export const $state = persistentAtom<AuthState | undefined>('authState', undefined, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function login(user: User, token: string) {
  $state.set({
    user,
    token,
  });
}

export function logout() {
  $state.set(undefined);
}
