import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Skeleton,
  SkeletonText,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

import { Image as ImageCard } from '../Interface/Image';

interface CardProps {
  data: ImageCard;
  viewImage: (url: string) => void;
}

export function Card({ data, viewImage }: CardProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box key={data.ts} borderRadius="md" bgColor="pGray.800" overflow="hidden">
      <Skeleton isLoaded={!isLoading}>
        <Image
          src={data.url}
          alt={data.title}
          objectFit="cover"
          w="100%"
          h={48}
          onClick={() => viewImage(data.url)}
          onLoad={() => setIsLoading(false)}
          cursor="pointer"
        />
      </Skeleton>

      <Box pt={5} pb={4} px={6}>
        {isLoading ? (
          <>
            <SkeletonText fontSize="2xl" mt={2} noOfLines={1} />
            <SkeletonText fontSize="md" mt={7} noOfLines={1} />
            <SkeletonText fontSize="md" mt={7} noOfLines={1} />
          </>
        ) : (
          <LinkBox _hover={data.urlSite ? { color: 'orange.200' } : undefined}>
            <LinkOverlay href={data.urlSite} isExternal>
              <Heading fontSize="2xl">{data.title}</Heading>
            </LinkOverlay>
            <Text mt={2.5} fontSize="md">
              {data.description}
            </Text>
          </LinkBox>
        )}
      </Box>
    </Box>
  );
}
