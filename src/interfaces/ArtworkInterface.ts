import { ArtworkStatusEnum } from '../enum/ArtworkStatusEnum';
import { ArtworkCategoryTypeEnum } from '../enum/ArtworkCategoryTypeEnum';

export interface ArtworkInterface {
  _id: string,
  title?: string,
  description?: string,
  categoryType?: ArtworkCategoryTypeEnum,
  contentUrl?: string,
  artistId?: string,
  tagList?: Array<number>
  likes: Array<string>,
  comments?: Array<any>,
  shares?: Array<string>,
  status?: ArtworkStatusEnum,
  createdAt?: string,
  createdBy?: string,
  updatedAt?: string,
  updatedBy?: string,
  artist: any,
  price?: number,
  isSale?: boolean
}