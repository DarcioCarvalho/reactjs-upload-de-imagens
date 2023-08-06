import { Box, Flex, Button, useDisclosure, Image } from '@chakra-ui/react';

import { ModalAddImage } from './Modal/AddImage';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="pGray.800">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px={{ base: 8, sm: 20 }}
          py={6}
        >
          <Image src="logo.svg" h={{ base: 8, sm: 10 }} />
          <Button
            px={{ base: 2, sm: 4 }}
            h={{ base: 7, sm: '2.5rem' }}
            onClick={() => onOpen()}
          >
            Adicionar imagem
          </Button>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
