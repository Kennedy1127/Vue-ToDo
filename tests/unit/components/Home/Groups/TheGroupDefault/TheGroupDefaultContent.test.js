import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import TheGroupDefaultContent from '@/components/Home/Groups/TheGroupDefault/TheGroupDefaultContent.vue';

describe('TheGroupDefaultContent', () => {
  describe('hovers TheGroupDefaultImage', () => {
    it('renders GroupHoverBox', async () => {
      render(TheGroupDefaultContent, {
        global: {
          provide: {
            title: 'Test Group Default Title',
            sourceImage: 'Test Group Default Source Image',
            isHome: false,
          },
        },
      });

      const TheGroupDefaultImage = screen.getByTestId('TheGroupDefaultImage');
      await userEvent.hover(TheGroupDefaultImage);

      const GroupHoverBox = screen.getByTestId('GroupHoverBox');
      expect(GroupHoverBox).toBeInTheDocument();
    });
  });
});
