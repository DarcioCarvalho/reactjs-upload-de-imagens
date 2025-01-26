import { Image } from './Image';

export interface ImagesAPIResponse {
  after?: {
    id: string;
  };
  data: Image[];
}
