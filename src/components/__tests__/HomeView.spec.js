import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '../../views/HomeView.vue'
describe('HomeView', () => {
  it('imports CardCarouselComponent', () => {
    const wrapper = mount(HomeView);

    expect(wrapper.findComponent({ name: 'CardCarouselComponent' }).exists()).toBe(true);
  });
});
