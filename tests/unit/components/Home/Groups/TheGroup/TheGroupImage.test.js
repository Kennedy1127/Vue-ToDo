import { render, screen } from '@testing-library/vue';
import TheGroupImage from '@/components/Home/Groups/TheGroup/TheGroupImage.vue';

describe('TheGroupImage', () => {
  it('uses v-lazy-image', () => {
    render(TheGroupImage, {
      global: {
        provide: {
          groupImage: 'Test Group Image',
        },
      },
    });

    const image = screen.getByRole('img');
    expect(image.className).toMatch('v-lazy-image');
  });
});
