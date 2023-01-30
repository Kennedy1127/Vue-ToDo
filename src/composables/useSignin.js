import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';

const useSignin = () => {
  const error = ref(null);

  const signin = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      // console.log(err);

      err.code === 'auth/wrong-password'
        ? (error.value = '**Oops! Wrong email address or password')
        : (error.value = '**Oops! Something went wrong.');

      throw new Error(err);
    }
  };

  return { error, signin };
};

export default useSignin;
