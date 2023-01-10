import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import TheGroupContent from '@/components/Home/Groups/TheGroup/TheGroupContent.vue';

describe('TheGroupContent', () => {
  const renderTheGroupContent = () => {
    render(TheGroupContent, {
      global: {
        provide: {
          groupImage: 'Test Group Image',
          title: 'Test Group Hover Box Title',
        },
      },
    });
  };

  describe('when user do not hover TheGroupImage', () => {
    it('do not display GroupHoverBox', () => {
      renderTheGroupContent();
      const GroupHoverBox = screen.queryByTestId('GroupHoverBox');
      expect(GroupHoverBox).not.toBeInTheDocument();
    });
  });

  describe('when user hovers TheGroupImage', () => {
    it('displays GroupHoverBox', async () => {
      renderTheGroupContent();

      const TheGroupImage = screen.getByTestId('TheGroupImage');
      await userEvent.hover(TheGroupImage);

      const GroupHoverBox = screen.queryByTestId('GroupHoverBox');
      expect(GroupHoverBox).toBeInTheDocument();
    });
  });
});
