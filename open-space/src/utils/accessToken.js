const TOKEN_KEY = 'token';

export const tokenHandler = {
  get: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  has: () => {
    /*  Kembalikan true jika token ada, false jika tidak ada.
    * '!!' double bang untuk mengubah nilai menajadi bolean murni
    true or false
     */
    return !!localStorage.getItem(TOKEN_KEY);
  },
  set: (token) => {
    return localStorage.setItem(TOKEN_KEY, token);
  },
  unset: () => {
    return localStorage.removeItem(TOKEN_KEY);
  }
};