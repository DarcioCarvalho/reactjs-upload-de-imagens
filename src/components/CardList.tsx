import { useState } from 'react';
import { SimpleGrid, useDisclosure } from '@chakra-ui/react';

import { Image as ImageCard } from '../Interface/Image';

import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface CardsProps {
  cards: ImageCard[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { onOpen, isOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImageURL, setSelectedImageURL] = useState(null);

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(imgUrl: string): void {
    setSelectedImageURL(imgUrl);
    onOpen();
  }
  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      {selectedImageURL && (
        <ModalViewImage
          isOpen={isOpen}
          onClose={onClose}
          imgUrl={selectedImageURL}
        />
      )}
    </>
  );
}
