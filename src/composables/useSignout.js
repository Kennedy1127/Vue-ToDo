import { ref } from 'vue';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/config';

const useSignout = () => {
  const error = ref(null);
  const signout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return { error, signout };
};

export default useSignout;
