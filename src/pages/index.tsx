import { FormEvent, useCallback, useState } from 'react'

import { Button, Flex, Input, Text } from '@chakra-ui/react'

import * as C from '~/components'
import { localApi } from '~/services'
import { APiSearchResult, ProductsResponse } from '~/types'
import { currencyBRL } from '~/utils'

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<ProductsResponse>({
    totalPrice: '',
    products: [],
  })

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()

    if (!search.trim()) return

    const { data } = await localApi.get<APiSearchResult[]>('products', {
      params: {
        q: search,
      },
    })

    const products = data.map(({ id, title, price }) => ({
      id,
      title,
      price,
      formatedPrice: currencyBRL.format(price),
    }))

    const totalPrice = currencyBRL.format(
      products.reduce((acc, curr) => acc + curr.price, 0)
    )

    setResults({ products, totalPrice })

    console.log({ products, totalPrice })
  }

  const addToWishlist = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <>
      <C.MetaTags />
      <Flex w="100vw" h="100vh" direction="column">
        <Flex
          as="form"
          align="center"
          onSubmit={handleSearch}
          maxW="720px"
          mx="auto"
          my="8"
        >
          <Text>Search</Text>
          <Input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            mx="4"
          />
          <Button type="submit" colorScheme="blackAlpha">
            Buscar
          </Button>
        </Flex>
        <C.SearchResults
          results={results.products}
          totalPrice={results.totalPrice}
          onAddToWhishList={addToWishlist}
        />
      </Flex>
    </>
  )
}
