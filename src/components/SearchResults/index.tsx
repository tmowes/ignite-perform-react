import { Flex, Heading } from '@chakra-ui/react'

import { ProductItem } from '../ProductItem'
import { SearchResultsProps } from './types'

export const SearchResults = (props: SearchResultsProps) => {
  const { results, totalPrice, onAddToWhishList } = props

  return (
    <Flex direction="column" align="center" maxW="1200px" mx="auto">
      <Heading>{totalPrice}</Heading>
      {results.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWhishList={onAddToWhishList}
        />
      ))}
    </Flex>
  )
}
