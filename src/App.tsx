import { Box, Button, Input, Text } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'

export const App = () => {
  const Buttons: React.FC<{ value: string }> = ({ value }) => {
    return (
      <Button
        w="75px"
        h="75px"
        backgroundColor="whiteAlpha.300"
        _hover={{ backgroundColor: 'whiteAlpha.100' }}
        boxShadow="0 5px grey"
        _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }}
        onClick={() => { display(value); setCalc(false); setSign(true) }}
      ><Text fontSize="70px" pb="5px" color="whiteAlpha.900">{value}</Text>
      </Button>
    )
  }
  const [expression, setExpression] = useState('')
  const [answer, setAnswer] = useState(0)
  const [calc, setCalc] = useState(false)
  const [sign, setSign] = useState(false)
  const [calculateS, setCalculateS] = useState(false)
  let zero = ''
  let fontSize = '80px'
  const toFixedAnswer = answer.toFixed(2)

  function display (symbol: string) {
    setExpression(prev => prev + symbol)
  }

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setAnswer(eval(expression))
  }

  const clear = () => {
    setCalc(false)
    setExpression('')
    setAnswer(0)
    setCalc(false)
    setSign(false)
    setCalculateS(false)
  }

  const deleteFunction = () => {
    if (expression.length > 1) {
      setExpression(prev => prev.slice(0, -1))
    } else {
      setExpression('')
    }
  }

  if (expression === '') {
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
    setExpression('')
    if (!number_test(answer)) {
      display(`${answer.toString()}-`)
    } else {
      display(`${toFixedAnswer}-`)
    }
    setCalculateS(false)
  }

  const plus = () => {
    setExpression('')
    if (!number_test(answer)) {
      display(`${answer.toString()}+`)
    } else {
      display(`${toFixedAnswer}+`)
    }
    setCalculateS(false)
  }

  const divide = () => {
    setExpression('')
    if (!number_test(answer)) {
      display(`${answer.toString()}/`)
    } else {
      display(`${toFixedAnswer}/`)
    } setCalculateS(false)
  }

  const multiply = () => {
    setExpression('')
    if (!number_test(answer)) {
      display(`${answer.toString()}*`)
    } else {
      display(`${toFixedAnswer}*`)
    } setCalculateS(false)
  }

  const dot = () => {
    setExpression('')
    if (!number_test(answer)) {
      display(`${answer.toString()}.`)
    } else {
      display(`${toFixedAnswer}.`)
    } setCalculateS(false)
  }

  function basicCalculationButtons (buttonValue: string, displayValue: string, buttonFunction: () => void, bgColor?: string, hoverColor?: string) {
    if (sign) {
      if (calculateS) {
        return (
          <Button
            w="75px"
            h="75px"
            backgroundColor={bgColor}
            _hover={{ backgroundColor: hoverColor }}
            boxShadow="0 5px grey"
            _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }}
            onClick={() => { display(displayValue); setCalc(false); setSign(false); buttonFunction() }}
          ><Text fontSize="70px" pb="20px" color="whiteAlpha.900">{buttonValue}</Text>
          </Button>
        )
      }
      return (
        <Button
          w="75px"
          h="75px"
          backgroundColor={bgColor}
          _hover={{ backgroundColor: hoverColor }}
          boxShadow="0 5px grey"
          _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }}
          onClick={() => { display(displayValue); setCalc(false); setSign(false) }}
        ><Text fontSize="70px" pb="20px" color="whiteAlpha.900">{buttonValue}</Text>
        </Button>
      )
    }
    if (calculateS) {
      return (
        <Button
          w="75px"
          h="75px"
          backgroundColor={bgColor}
          _hover={{ backgroundColor: hoverColor }}
          boxShadow="0 5px grey"
          _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }}
          onClick={() => { display(''); setCalc(false) }}
        ><Text fontSize="70px" pb="20px" color="whiteAlpha.900">{buttonValue}</Text>
        </Button>
      )
    } return (
      <Button
        w="75px"
        h="75px"
        backgroundColor={bgColor}
        _hover={{ backgroundColor: hoverColor }}
        boxShadow="0 5px grey"
        _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }}
        onClick={() => { display(''); setCalc(false) }}
      ><Text fontSize="70px" pb="20px" color="whiteAlpha.900">{buttonValue}</Text>
      </Button>
    )
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
            <Buttons value="7"/>
            <Buttons value="8"/>
            <Buttons value="9"/>
            {basicCalculationButtons('x', '*', multiply, 'blue.600', 'blue')}
          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Buttons value="4"/>
            <Buttons value="5"/>
            <Buttons value="6"/>
            {basicCalculationButtons('/', '/', divide, 'whiteAlpha.300', 'whiteAlpha.100')}
          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Buttons value="1"/>
            <Buttons value="2"/>
            <Buttons value="3"/>
            {basicCalculationButtons('-', '-', minus, 'whiteAlpha.300', 'whiteAlpha.100')}

          </Box>
          <Box display="flex" w="350px" justifyContent="space-between">
            <Buttons value="0"/>
            {basicCalculationButtons('.', '.', dot, 'whiteAlpha.300', 'whiteAlpha.100')}
            <Button w="75px" h="75px" backgroundColor="whiteAlpha.300" _hover={{ backgroundColor: 'whiteAlpha.100' }} boxShadow="0 5px grey" _active={{ boxShadow: '0 5px white', transform: 'translateY(4px)' }} onClick={() => { setCalc(true); calculate(); setCalculateS(true) }}><Text fontSize="70px" pb="15px" color="whiteAlpha.900">=</Text></Button>
            {basicCalculationButtons('+', '+', plus, 'whiteAlpha.300', 'whiteAlpha.100')}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App
