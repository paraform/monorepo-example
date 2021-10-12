import { Button } from "../button";
import { css } from "../../stitches.config";

export default {
  title: "Primitives/Button",
  component: Button,
};

const container = css({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
});

export const Component = ({ constrained }: { constrained: boolean }) => (
  <div className={container()}>
    <Button constrained={constrained}>Button</Button>
  </div>
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
