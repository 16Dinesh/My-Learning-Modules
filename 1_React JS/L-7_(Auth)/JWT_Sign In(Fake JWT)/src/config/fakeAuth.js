const fakeToken = {
  token: "fake.jwt.token.123456",
  payload: {
    user: "demoUser",
    exp: Date.now() + 1000 * 60 * 60,
  },
};

export const login = (username, password) => {
  if (username === "admin" && password === "password") {
    localStorage.setItem("token", JSON.stringify(fakeToken));
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const parsed = JSON.parse(token);
    return parsed.payload.exp > Date.now();
  } catch {
    return false;
  }
};
