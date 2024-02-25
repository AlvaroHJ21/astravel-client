import type { LoginUserDto, RegisterUserDto } from '../interfaces/User';

const baseUrl = import.meta.env.PUBLIC_BACKEND_URL;

export async function login(loginUserDto: LoginUserDto) {
  const resp = await fetch(`${baseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(loginUserDto),
  });
  const json = await resp.json();

  return {
    ok: resp.ok,
    data: json.data,
    token: json.token,
    message: json.message,
    errors: json.errors,
  };
}

export async function register(registerUserDto: RegisterUserDto) {
  const resp = await fetch(`${baseUrl}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(registerUserDto),
  });
  const json = await resp.json();

  return {
    ok: resp.ok,
    data: json.data,
    token: json.token,
    message: json.message,
    errors: json.errors,
  };
}

export async function logout(token: string) {
  const resp = await fetch(`${baseUrl}/api/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    ok: resp.ok,
  };
}
