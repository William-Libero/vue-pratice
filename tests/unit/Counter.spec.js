import { mount } from '@vue/test-utils'
import Counter from "@/components/Counter.vue"

describe("Counter.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(Counter, {
      propsData: {
         msg: "new message"
      },
    });
    expect(wrapper.text()).toContain("new message");
  });
});
