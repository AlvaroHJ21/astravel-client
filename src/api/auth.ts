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

  console.log(json);

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

  console.log(json);

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

export async function verifyEmail(searchParams: string, token: string) {
  const resp = await fetch(`${baseUrl}/api/verify-email${searchParams}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await resp.json();

  console.log(json);

  return {
    ok: resp.ok,
    message: json.message,
  };
}

export async function sendEmailResetPassword(email: string) {
  const resp = await fetch(`${baseUrl}/api/password-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const json = await resp.json();

  console.log(json);
}

export async function resetPassword(searchParams: string, resetPasswordDto: any) {
  const resp = await fetch(`${baseUrl}/api/password-reset${searchParams}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(resetPasswordDto),
  });

  const json = await resp.json();

  console.log(json);

  return {
    ok: resp.ok,
    message: json.message,
  };
}
