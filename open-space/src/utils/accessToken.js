export const tokenHandler = {
  get() {
    return localStorage.getItem('token');
  },
  has() {
    /*      Kembalikan true jika token ada, false jika tidak ada.
    * '!!' double bang untuk mengubah nilai menajadi bolean murni
    true or false
     */
    return !!localStorage.getItem('token');
  },
  set(token){
    return localStorage.setItem('token', token);
  },
  unset(){
    return localStorage.removeItem('token');
  }
};