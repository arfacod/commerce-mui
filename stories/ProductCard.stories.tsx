import ProductCard from '@components/product/product-card'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ProductCard',
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProductCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  product: {
    id: '0',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
      },
    ],
    price: { value: 25, retailPrice: 25, currencyCode: 'USD' },
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
    variants: [],
    options: [],
  },
}
