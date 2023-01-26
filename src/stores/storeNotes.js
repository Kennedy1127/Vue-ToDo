import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    { id: '1', title: 'Custom Title 1', date: '2022-2-3', text: 'Test 1' },
    {
      id: '2',
      title: 'Custom Title 2',
      date: '2022-3-2',
      text: 'Test 2 Test 2',
    },
    {
      id: '3',
      title: 'Custom Title 3',
      date: '2022-1-16',
      text: 'Test 3 Test 3',
    },
    {
      id: '4',
      title: 'Custom Title 4',
      date: '2022-3-26',
      text: 'Test 4 Test 4 Test 4 Test 4',
    },
    {
      id: '5',
      title: 'Custom Title 5',
      date: '2022-6-5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sunt commodi libero quia cupiditate repellendus veniam quidem quod assumenda autem debitis, eos ex incidunt veritatis harum dolor soluta quos unde!',
    },
    {
      id: '6',
      title: 'Custom Title 6',
      date: '2022-11-26',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa asperiores atque quos non natus, ab rem aspernatur, aliquam commodi nesciunt sequi recusandae sed? Ut laboriosam eos placeat esse voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident autem, iusto vitae nostrum iste officiis officia perspiciatis voluptate ab culpa nulla molestias quis! Reiciendis consequuntur nulla itaque ad aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa asperiores atque quos non natus, ab rem aspernatur, aliquam commodi nesciunt sequi recusandae sed? Ut laboriosam eos placeat esse voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident autem, iusto vitae nostrum iste officiis officia perspiciatis voluptate ab culpa nulla molestias quis! Reiciendis consequuntur nulla itaque ad aliquam!',
    },
    {
      id: '7',
      title: 'Custom Title 7',
      date: '2022-7-6',
    },
    {
      id: '8',
      date: '2022-1-6',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa asperiores atque quos non natus, ab rem aspernatur, aliquam commodi nesciunt sequi recusandae sed? Ut laboriosam eos placeat esse voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident autem, iusto vitae nostrum iste officiis officia perspiciatis voluptate ab culpa nulla molestias quis! Reiciendis consequuntur nulla itaque ad aliquam!',
    },
    {
      id: '8',
      date: '2022-1-6',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa asperiores atque quos non natus, ab rem aspernatur, aliquam commodi nesciunt sequi recusandae sed? Ut laboriosam eos placeat esse voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident autem, iusto vitae nostrum iste officiis officia perspiciatis voluptate ab culpa nulla molestias quis! Reiciendis consequuntur nulla itaque ad aliquam!',
    },
    {
      id: '8',
      date: '2022-1-6',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa asperiores atque quos non natus, ab rem aspernatur, aliquam commodi nesciunt sequi recusandae sed? Ut laboriosam eos placeat esse voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident autem, iusto vitae nostrum iste officiis officia perspiciatis voluptate ab culpa nulla molestias quis! Reiciendis consequuntur nulla itaque ad aliquam!',
    },
    {
      id: '8',
      date: '2022-1-6',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa asperiores atque quos non natus, ab rem aspernatur, aliquam commodi nesciunt sequi recusandae sed? Ut laboriosam eos placeat esse voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident autem, iusto vitae nostrum iste officiis officia perspiciatis voluptate ab culpa nulla molestias quis! Reiciendis consequuntur nulla itaque ad aliquam!',
    },
    {
      id: '8',
      date: '2022-1-6',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa asperiores atque quos non natus, ab rem aspernatur, aliquam commodi nesciunt sequi recusandae sed? Ut laboriosam eos placeat esse voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident autem, iusto vitae nostrum iste officiis officia perspiciatis voluptate ab culpa nulla molestias quis! Reiciendis consequuntur nulla itaque ad aliquam!',
    },
  ]);

  // actions
  const createNote = (note) => {
    notes.value.push(note);
  };

  const deleteNote = (selectedDeleteNoteID) => {
    notes.value = notes.value.filter((el) => el.id !== selectedDeleteNoteID);
  };
  //
  return { notes, createNote, deleteNote };
});
