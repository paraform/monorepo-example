export default {
  title: "Primitives/Button",
};

export const Component = ({ constrained }: { constrained: boolean }) => (
  <button>Button</button>
);

Component.args = {
  constrained: true,
};

Component.argTypes = {
  constrained: {
    control: {
      type: "select",
      options: [true, false],
    },
  },
};
