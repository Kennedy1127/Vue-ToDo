import { render, screen } from '@testing-library/vue';
import GroupHoverBox from '@/components/Groups/GroupHoverBox.vue';

describe('GroupHoverBox', () => {
  it('', () => {
    render(GroupHoverBox, {
      global: {
        provide: {
          title: 'Test Group Title',
        },
      },
    });

    const groupTitle = screen.getByText(/test group title/i);
    expect(groupTitle).toBeInTheDocument();
  });
});
