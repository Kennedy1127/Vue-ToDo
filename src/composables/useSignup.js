import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { auth, db } from '@/firebase/config';
import { v4 as uuidv4 } from 'uuid';

const useSignup = () => {
  const error = ref(null);

  const signup = async ({ email, username, password }) => {
    try {
      // create user
      await createUserWithEmailAndPassword(auth, email, password);
      //

      // update user
      const updateUserProfile = {
        displayName: username,
      };
      await updateProfile(auth.currentUser, updateUserProfile);
      //

      // create user file
      const userRef = doc(db, 'users', auth.currentUser.uid);

      const note = {
        title: 'Default Title',
        text: 'Default Text',
        timestamp: Timestamp.now(),
        id: uuidv4(),
        username,
      };

      const file = {
        uid: auth.currentUser.uid,
        email: email,
        username: username,
        groups: [],
        notes: [note],
        createTime: Timestamp.now(),
      };
      await setDoc(userRef, file);
      //
    } catch (err) {
      // console.log(err);

      err.code === 'auth/email-already-in-use'
        ? (error.value = '**Email address already exists.')
        : (error.value = '**Error! Something went wrong.');

      throw new Error(err);
    }
  };

  return { error, signup };
};

export default useSignup;
