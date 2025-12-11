export async function fetchSessionUser() {
  try {
    const res = await fetch("http://localhost:8080/", {
      credentials: "include",
    });

    if (!res.ok) {
      return null; // user not logged in or session expired
    }

    return res.json(); // fullName + email
  } catch {
    return null;
  }
}

export async function loginRequest(email: string, password: string) {
  const res = await fetch("http://localhost:8080/login", {
    method: "POST",

    credentials: "include",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid email or password");
  }

  return res;
}

export async function logoutRequest() {
  const res = await fetch("http://localhost:8080/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Logout failed");
  }

  return res;
}

export async function registerRequest(
  fullName: string,
  email: string,
  password: string
) {
  const res = await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
    }),
  });

  if (!res.ok) {
    try {
      const data = await res.json();
      throw new Error(data.message || "Registration failed");
    } catch {
      throw new Error("Registration failed");
    }
  }

  return res;
}
