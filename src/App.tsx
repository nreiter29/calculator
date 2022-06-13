import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  const numbers = [0]

  const numberPush = (value: number) => {
    setNumber(value)
    numbers.push(value)
    setCount(count + 1)
  }

  numberPush(1)

  return (
    <Box w="100vw" h="100vh" backgroundColor="gray.800" textAlign="center">
      <Box pt="150px">
        <Input color="whiteAlpha.900" fontSize="80px" w="350px" ml="auto" mr="auto" display="flex" justifyContent="flex-end" placeholder={numbers.toString()} textAlign="right" paddingTop="50px" paddingBottom="50px" mb="17px"/>
      </Box>
      <Box w="350px" ml="auto" mr="auto" display="flex" flexDir="column" h="350px" justifyContent="space-between">
        <Box display="flex" w="350px" justifyContent="space-between">
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numbers.push(7)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">7</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(8)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">8</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(9)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">9</Text></Button>
          <Button w="75px" h="75px" backgroundColor="blue.600"><Text fontSize="70px" pb="20px" color="whiteAlpha.900">x</Text></Button>
        </Box>
        <Box display="flex" w="350px" justifyContent="space-between">
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(4)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">4</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(5)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">5</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(6)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">6</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300"><Text fontSize="70px" pb="20px" color="whiteAlpha.900">/</Text></Button>
        </Box>
        <Box display="flex" w="350px" justifyContent="space-between">
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(1)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">1</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(2)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">2</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(3)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">3</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300"><Text fontSize="70px" pb="15px" color="whiteAlpha.900">-</Text></Button>
        </Box>
        <Box display="flex" w="350px" justifyContent="space-between">
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => numberPush(0)}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">0</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300"><Text fontSize="70px" pb="5px" color="whiteAlpha.900">.</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300"><Text fontSize="70px" pb="15px" color="whiteAlpha.900">=</Text></Button>
          <Button w="75px" h="75px" backgroundColor="whiteAlpha.300"><Text fontSize="70px" pb="15px" color="whiteAlpha.900">+</Text></Button>
        </Box>
      </Box>
    </Box>
  )
}

export default App
