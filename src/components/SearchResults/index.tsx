import { Flex, Heading } from '@chakra-ui/react'
import { List, ListRowRenderer } from 'react-virtualized'

import { ProductItem } from '../ProductItem'
import { SearchResultsProps } from './types'

export const SearchResults = (props: SearchResultsProps) => {
  const { results, totalPrice, onAddToWhishList } = props

  const rowRender: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem
        product={results[index]}
        onAddToWhishList={onAddToWhishList}
      />
    </div>
  )

  return (
    <Flex direction="column" align="center" maxW="1200px" mx="auto">
      <Heading>{totalPrice}</Heading>
      <List
        height={300}
        rowHeight={50}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRender}
      />
      {/* {results.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWhishList={onAddToWhishList}
        />
      ))} */}
    </Flex>
  )
}
