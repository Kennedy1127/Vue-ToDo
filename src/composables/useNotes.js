import { ref } from 'vue';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase/config';

const useNotes = () => {
  const error = ref(null);
  const docRef = doc(db, 'users', auth.currentUser.uid);

  const updateNote = async (data) => {
    try {
      await updateDoc(docRef, data);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };

  return { error, updateNote };
};

export default useNotes;
