import { ref, watchEffect } from 'vue';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/firebase/config';

const getNotes = () => {
  const error = ref(null);
  const notes = ref(null);

  const docRef = doc(db, 'users', auth.currentUser.uid);

  const unsub = onSnapshot(
    docRef,
    (data) => {
      notes.value = data.data().notes;
    },
    (err) => {
      console.error(err);
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub);
  });

  return { error, notes };
};

export default getNotes;
