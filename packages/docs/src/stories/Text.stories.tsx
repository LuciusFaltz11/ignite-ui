import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id, repellat magni nobis ratione harum nostrum laboriosam excepturi dolor odio deserunt ipsum ullam, minima voluptatibus impedit ipsam molestias eos voluptates.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
