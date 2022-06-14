import { Box, Button, Input, Text } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'

export const App = () => {
  const [expression, setExpression] = useState(' ')
  const [answer, setAnswer] = useState(0)
  const [calc, setCalc] = useState(false)
  const [sign, setSign] = useState(false)
  const [calculateS, setCalculateS] = useState(false)
  let zero: any = ' '
  let fontSize = '80px'
  const toFixedAnswer = answer.toFixed(2)

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
    setCalc(false)
    setSign(false)
    setCalculateS(false)
  }

  const deleteFunction = () => {
    setExpression(prev => prev.slice(0, -1))
  }

  if (expression === ' ') {
    zero = '0'
  }

  if (expression.length >= 9 || answer.toString.length >= 9) {
    fontSize = '60px'
  }
  if (expression.length >= 12 || answer.toString.length >= 12) {
    fontSize = '40px'
  }
  if (expression.length >= 17 || answer.toString.length >= 17) {
    fontSize = '30px'
  }
  if (expression.length === 22 || answer.toString.length === 22) {
    alert('Max length reached')
    clear()
  }

  function number_test (n: number) {
    const result = (n - Math.floor(n)) !== 0

    return result
  }

  let anzeige

  if (number_test(answer)) {
    anzeige = toFixedAnswer
  } else {
    anzeige = answer
  }
  const minus = () => {
    setExpression(' ')
    if (!number_test(answer)) {
      display(`${answer.toString()}-`)
    } else {
      display(`${toFixedAnswer}-`)
    }
    setCalculateS(false)
  }

  const plus = () => {
    setExpression(' ')
    if (!number_test(answer)) {
      display(`${answer.toString()}+`)
    } else {
      display(`${toFixedAnswer}+`)
    }
    setCalculateS(false)
  }

  const divide = () => {
    setExpression(' ')
    if (!number_test(answer)) {
      display(`${answer.toString()}/`)
    } else {
      display(`${toFixedAnswer}/`)
    } setCalculateS(false)
  }

  const multiply = () => {
    setExpression(' ')
    if (!number_test(answer)) {
      display(`${answer.toString()}*`)
    } else {
      display(`${toFixedAnswer}*`)
    } setCalculateS(false)
  }

  const dot = () => {
    setExpression(' ')
    if (!number_test(answer)) {
      display(`${answer.toString()}.`)
    } else {
      display(`${toFixedAnswer}.`)
    } setCalculateS(false)
  }

  return (
    <Box w="100vw" h="100vh" backgroundColor="gray.800" textAlign="center" display="flex" justifyContent="center" gap="17px">
      <Box display="flex" flexDirection="column">
        <Box display="flex" w="350px" mt="198px" ml="auto" mr="auto" h="52.5px">
          {calc
            ? (
              <Text
                color="whiteAlpha.500"
                fontSize="35px"
                top="195px"
                w="350px"
                display="flex"
                justifyContent="flex-end"
                paddingRight="10px"
              >{expression}
              </Text>
              )
            : (
              <Text
                color="white"
                fontSize="35px"
                top="195px"
                w="350px"
                display="flex"
                justifyContent="flex-end"
                paddingRight="10px"
              >{anzeige}
              </Text>
              )}
        </Box>
        <Box>
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
                h="122px"
                alignItems="center"
              >{anzeige}
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
                h="122px"
                alignItems="center"
              >{zero}{expression}
              </Box>
              )}
        </Box>
        <Box w="350px" display="flex" justifyContent="space-between">
          <Button mb="15px" w="165px" h="74px" backgroundColor="red" color="whiteAlpha.900" _hover={{ backgroundColor: 'darkred' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => clear()}>Reset</Button>
          <Button mb="15px" w="165px" h="74px" backgroundColor="red" color="whiteAlpha.900" _hover={{ backgroundColor: 'darkred' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => deleteFunction()}>Delete</Button>
        </Box>
        <Box w="350px" ml="auto" mr="auto" display="flex" flexDir="column" h="350px" justifyContent="space-between">
          <Box display="flex" w="350px" justifyContent="space-between">
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('7'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">7</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('8'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">8</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('9'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">9</Text></Button>
            {sign ? calculateS ? <Button w="75px" h="75px" backgroundColor="blue.600" _hover={{ backgroundColor: 'blue' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('*'); setCalc(false); setSign(false); multiply() }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">x</Text></Button> : <Button w="75px" h="75px" backgroundColor="blue.600" _hover={{ backgroundColor: 'blue' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('*'); setCalc(false); setSign(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">x</Text></Button> : calculateS ? <Button w="75px" h="75px" backgroundColor="blue.600" _hover={{ backgroundColor: 'blue' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">x</Text></Button> : <Button w="75px" h="75px" backgroundColor="blue.600" _hover={{ backgroundColor: 'blue' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">x</Text></Button>}
          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('4'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">4</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('5'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">5</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('6'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">6</Text></Button>
            {sign ? calculateS ? <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('/'); setCalc(false); setSign(false); divide() }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">/</Text></Button> : <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('/'); setCalc(false); setSign(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">/</Text></Button> : calculateS ? <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">/</Text></Button> : <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">/</Text></Button>}
          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('1'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">1</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('2'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">2</Text></Button>
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('3'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">3</Text></Button>
            {sign ? calculateS ? <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('-'); setCalc(false); setSign(false); minus() }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">-</Text></Button> : <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('-'); setCalc(false); setSign(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">-</Text></Button> : calculateS ? <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">-</Text></Button> : <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">-</Text></Button>}
          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('0'); setCalc(false); setSign(true) }}><Text fontSize="70px" pb="5px" color="whiteAlpha.900">0</Text></Button>
            {sign ? calculateS ? <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('.'); setCalc(false); setSign(false); dot() }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">.</Text></Button> : <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('.'); setCalc(false); setSign(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">.</Text></Button> : calculateS ? <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">.</Text></Button> : <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">.</Text></Button>}
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { setCalc(true); calculate(); setCalculateS(true) }}><Text fontSize="70px" pb="15px" color="whiteAlpha.900">=</Text></Button>
            {sign ? calculateS ? <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('+'); setCalc(false); setSign(false); plus() }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">+</Text></Button> : <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display('+'); setCalc(false); setSign(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">+</Text></Button> : calculateS ? <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">+</Text></Button> : <Button w="75px" h="75px" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} backgroundColor="whiteAlpha.300" onClick={() => { display(''); setCalc(false) }}><Text fontSize="70px" pb="20px" color="whiteAlpha.900">+</Text></Button>}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App
