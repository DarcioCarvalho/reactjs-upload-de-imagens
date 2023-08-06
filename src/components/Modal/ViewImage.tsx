import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="gray.800" maxW="max-content" overflow="hidden">
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            maxH="600px"
            maxW={{ base: '300px', md: '600px', lg: '900px' }}
          />
        </ModalBody>

        <ModalFooter
          paddingBlock={2}
          paddingInline="10px"
          justifyContent="flex-start"
        >
          <Link href={imgUrl} fontSize="14px" isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
