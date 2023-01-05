import { render, screen } from '@testing-library/vue';
import GroupImage from '@/components/Home/Groups/GroupImage.vue';

describe('GroupImage', () => {
  it('renders', () => {
    render(GroupImage);
    screen.debug();
  });
});
