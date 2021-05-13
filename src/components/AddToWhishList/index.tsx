import { Button, Flex, Text } from '@chakra-ui/react'

import { AddToWhishListProps } from './types'

export const AddToWhishList = (props: AddToWhishListProps) => {
  const { onAddToWhishList, onRequestClose } = props

  return (
    <Flex align="center" maxW="1200px" mx="auto" bg="gray.700">
      <Text>Deseja adicionar aos favoritos?</Text>
      <Button colorScheme="red" onClick={onRequestClose}>
        Não
      </Button>
      <Button colorScheme="green" onClick={onAddToWhishList}>
        Sim
      </Button>
    </Flex>
  )
}
