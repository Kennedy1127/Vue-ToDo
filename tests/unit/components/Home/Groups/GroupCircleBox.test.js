import { render, screen } from '@testing-library/vue';
import GroupCircleBox from '@/components/Home/Groups/GroupCircleBox.vue';

describe('GroupCircleBox', () => {
  it('renders slot content', () => {
    render(GroupCircleBox, {
      slots: {
        default: `
        <div>
          <p>Test Slot</p>
        </div>
        `,
      },
    });

    const p = screen.getByText(/test slot/i);
    expect(p.textContent).toBe('Test Slot');
  });
});
