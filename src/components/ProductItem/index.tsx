import { memo, useState } from 'react'
// import { lazy } from 'react'
import dynamic from 'next/dynamic'

import { Button, Flex, Text } from '@chakra-ui/react'
// import { AddToWhishList } from '../AddToWhishList'

import { ProductItemProps } from './types'
import type { AddToWhishListProps } from '../AddToWhishList/types'

const AddToWhishList = dynamic<AddToWhishListProps>(
  () => import('../AddToWhishList').then(mod => mod.AddToWhishList),
  {
    loading: () => <span>carregando...</span>,
  }
)

const ProductComponent = (props: ProductItemProps) => {
  const { product, onAddToWhishList } = props
  const [isAddingToWhishList, setIsAddingToWhishList] = useState(false)

  return (
    <Flex>
      <Text>{product.title}</Text>
      <Text mx="2">-</Text>
      <Text>{product.formatedPrice}</Text>

      <Button
        colorScheme="blackAlpha"
        onClick={() => setIsAddingToWhishList(true)}
      >
        Adicionar aos favoritos
      </Button>

      {isAddingToWhishList && (
        <AddToWhishList
          onAddToWhishList={() => onAddToWhishList(product.id)}
          onRequestClose={() => setIsAddingToWhishList(false)}
        />
      )}
    </Flex>
  )
}

export const ProductItem = memo(ProductComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
)
