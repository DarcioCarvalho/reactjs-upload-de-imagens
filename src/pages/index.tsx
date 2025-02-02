/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from 'react';
import { Button, Box } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query';

import { ImagesAPIResponse } from '../Interface/ImagesAPIResponse';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { api } from '../services/api';

export default function Home(): JSX.Element {
  async function fetchImages({ pageParam = null }): Promise<ImagesAPIResponse> {
    const { data } = await api.get("api/images", {
      params: {
        after: pageParam,
      },
    });
    return data;
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    fetchImages,
    // TODO GET AND RETURN NEXT PAGE PARAM
    {
      getNextPageParam: lastPage => lastPage?.after || null,
    }
  );

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    if (!data)
      return

    const formattedList = data.pages.map(image => image.data).flat(1);
    // eslint-disable-next-line consistent-return
    return formattedList

  }, [data]);



  // TODO RENDER LOADING SCREEN
  if (isLoading) {
    return <Loading />;
  }

  // TODO RENDER ERROR SCREEN
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20} d="flex" flexDir="column">
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}


        {hasNextPage && (
          <Button
            w="134px"
            mt={10}
            mx="auto"
            disabled={isFetchingNextPage}
            isLoading={isFetchingNextPage}
            loadingText="Carregando..."
            onClick={() => fetchNextPage()}
          >
            Carregar mais
          </Button>
        )}
      </Box>
    </>
  );
}
