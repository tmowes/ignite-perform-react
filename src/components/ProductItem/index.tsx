import { memo } from 'react'

import { Button, Flex, Text } from '@chakra-ui/react'

import { ProductItemProps } from './types'

const ProductComponent = (props: ProductItemProps) => {
  const { product, onAddToWhishList } = props

  return (
    <Flex>
      <Text>{product.title}</Text>
      <Text mx="2">-</Text>
      <Text>{product.formatedPrice}</Text>
      <Button
        colorScheme="blackAlpha"
        onClick={() => onAddToWhishList(product.id)}
      >
        Add to wishlist
      </Button>
    </Flex>
  )
}

export const ProductItem = memo(ProductComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
)
