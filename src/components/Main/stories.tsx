import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'blablabla',
    description: 'teste'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
// Basic.args = {
//     title: 'blablabla2',
//     description: 'teste2'
// }
