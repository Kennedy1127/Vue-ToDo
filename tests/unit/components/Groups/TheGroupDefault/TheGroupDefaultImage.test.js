import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import TheGroupDefaultImage from '@/components/Groups/TheGroupDefault/TheGroupDefaultImage.vue';

describe('TheGroupDefaultImage', () => {
  const renderTheGroupDefaultImage = (provide = {}) => {
    render(TheGroupDefaultImage, {
      global: {
        provide: {
          ...provide,
        },
      },
    });
  };

  describe('it is home icon', () => {
    it('class has "hover:bg-brand-blue-1"', () => {
      const provide = {
        sourceImage: 'Test Source Image',
        isHome: true,
      };

      renderTheGroupDefaultImage(provide);

      const GroupCircleBox = screen.getByTestId('GroupCircleBox');
      expect(GroupCircleBox.className).toMatch('hover:bg-brand-blue-1');
    });
  });

  describe('it is not home icon', () => {
    it('class has "hover:bg-brand-green-1"', () => {
      const provide = {
        sourceImage: 'Test Source Image',
        isHome: false,
      };

      renderTheGroupDefaultImage(provide);

      const GroupCircleBox = screen.getByTestId('GroupCircleBox');
      expect(GroupCircleBox.className).toMatch('hover:bg-brand-green-1');
    });
  });

  describe('TheGroupDefaultImage has sourceImage', () => {
    it('renders sourceImage', () => {
      const provide = {
        sourceImage: 'Test Source Image',
        isHome: false,
      };

      renderTheGroupDefaultImage(provide);

      const sourceImage = screen.getByTestId('sourceImage');
      expect(sourceImage).toBeInTheDocument();
    });
  });

  describe('TheGroupDefaultImage does not have sourceImage', () => {
    it('renders crosshair', () => {
      const provide = {
        sourceImage: false,
        isHome: false,
      };

      renderTheGroupDefaultImage(provide);

      const crosshair = screen.getAllByTestId('crosshair');
      expect(crosshair).toHaveLength(2);
    });

    it('renders green crosshair', () => {
      const provide = {
        sourceImage: false,
        isHome: false,
      };

      renderTheGroupDefaultImage(provide);

      const crosshair = screen.getAllByTestId('crosshair');
      crosshair.forEach((el) => expect(el).toHaveClass('bg-brand-green-1'));
    });

    describe('user hovers TheGroupDefaultImage', () => {
      it('renders white crosshair', async () => {
        const provide = {
          sourceImage: false,
          isHome: false,
        };

        renderTheGroupDefaultImage(provide);

        const GroupCircleBox = screen.getByTestId('GroupCircleBox');
        await userEvent.hover(GroupCircleBox);

        const crosshair = screen.getAllByTestId('crosshair');
        crosshair.forEach((el) => expect(el).toHaveClass('bg-brand-white-1'));
      });
    });
  });
});
