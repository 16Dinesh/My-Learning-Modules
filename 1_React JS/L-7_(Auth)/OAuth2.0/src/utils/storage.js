export const saveToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getToken = () => {
  const item = localStorage.getItem("token");
  return item ? JSON.parse(item) : null;
};

export const clearToken = () => {
  localStorage.removeItem("token");
};
