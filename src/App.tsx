import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'

export const App = () => {
  const [expression, setExpression] = useState(' ')
  const [answer, setAnswer] = useState(0)
  const [calc, setCalc] = useState(false)
  let zero = ' '
  let fontSize = '80px'
  let resetButton = '390px'

  const display = (symbol: string) => {
    setExpression(prev => prev + symbol)
  }

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setAnswer(eval(expression))
  }

  const clear = () => {
    setCalc(false)
    setExpression(' ')
    setAnswer(0)
  }

  if (expression === ' ') {
    zero = '0'
  }

  if (expression.length >= 8 || answer >= 8) {
    fontSize = '60px'
    resetButton = '360px'
  }
  if (expression.length >= 11 || answer >= 11) {
    fontSize = '40px'
    resetButton = '330px'
  }
  if (expression.length >= 15 || answer >= 15) {
    fontSize = '30px'
    resetButton = '315px'
  }
  if (expression.length === 18 || answer === 18) {
    alert('Max length reached')
    clear()
  }

  console.log(calc)

  return (
    <Box w="100vw" h="100vh" backgroundColor="gray.800" textAlign="center" display="flex" justifyContent="center" gap="17px">
      <Box display="flex" flexDirection="column">
        <Box display="flex" h="auto" w="350px" mt="100px">
          {calc
            ? (
              <Text
                color="whiteAlpha.500"
                position="absolute"
                fontSize="35px"
                top="195px"
                ml="auto"
                mr="auto"
                w="350px"
              >{expression}
              </Text>
              )
            : <Text color="white" position="absolute" fontSize="35px" top="195px" ml="auto" mr="auto" w="350px">{expression}</Text>}
        </Box>
        <Box pt="150px">
          {calc
            ? (
              <Box
                border="1px"
                borderColor="white"
                rounded="md"
                textColor="white"
                fontSize={fontSize}
                w="350px"
                display="flex"
                justifyContent="flex-end"
                textAlign="right"
                mb="17px"
                paddingRight="10px"
              >{answer.toFixed(6)}
              </Box>
              )
            : (
              <Box
                border="1px"
                borderColor="white"
                rounded="md"
                color="whiteAlpha.500"
                fontSize={fontSize}
                w="350px"
                display="flex"
                justifyContent="flex-end"
                textAlign="right"
                mb="17px"
                paddingRight="10px"
              >{zero}{expression}
              </Box>
              )}
        </Box>
        <Box w="350px" ml="auto" mr="auto" display="flex" flexDir="column" h="350px" justifyContent="space-between">
          <Box display="flex" w="350px" justifyContent="space-between">
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('7'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">7</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('8'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">8</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('9'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">9</Text></Button>
            <Button w="75px" h="75px" backgroundColor="blue.600" onClick={() => { display('*'); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">x</Text></Button>
          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('4'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">4</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('5'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">5</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('6'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">6</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('/'); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">/</Text></Button>
          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('1'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">1</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('2'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">2</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('3'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">3</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('-'); setCalc(false) }}><Text fontSize="70px" pb="15px" color="whiteAlpha.900">-</Text></Button>
          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('0'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">0</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('.'); setCalc(false) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">.</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { setCalc(true); calculate() }}><Text fontSize="70px" pb="15px" color="whiteAlpha.900">=</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" onClick={() => { display('+'); setCalc(false) }}><Text fontSize="70px" pb="15px" color="whiteAlpha.900">+</Text></Button>
          </Box>
        </Box>
      </Box>
      <Button mt={resetButton} w="74px" h="74px" backgroundColor="red" color="whiteAlpha.900" onClick={() => clear()}>Reset</Button>
    </Box>
  )
}

export default App
