import { loginWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseApp } from "..";

const auth = getAuth(firebaseApp);

export default async function sign(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await loginWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
