import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ChangeMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      borderRadius='50%'
      p='10px'
      position='fixed'
      bottom='20px'
      left='20px'
      zIndex='999'
      onClick={() => {
        toggleColorMode()
      }}
    >
      {localStorage.getItem('chakra-ui-color-mode') === 'light' ? (
        <Icon as={MoonIcon} />
      ) : (
        <Icon as={SunIcon} />
      )}
    </Button>
  )
}

export default ChangeMode
