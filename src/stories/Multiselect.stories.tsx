import { ComponentStory, ComponentMeta } from "@storybook/react";
import Multiselect from "../components/Multiselect";

export default {
  title: "UI/Multiselect",
  component: Multiselect,
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = (args) => (
  <Multiselect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      text: "First",
      id: 1,
    },
    {
      text: "Second",
      id: 2,
    },
    {
      text: "Third",
      id: 3,
    },
    {
      text: "Fourth",
      id: 4,
    },
  ],
  placeholder: "Selecione",
};
