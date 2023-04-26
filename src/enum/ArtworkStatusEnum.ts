export enum ArtworkStatusEnum {
  FREE = 1,
  PREMIUM = 2
}

const ArtworkStatusEnumMap = [ 
  ArtworkStatusEnum.FREE,
  ArtworkStatusEnum.PREMIUM,
];

export const isArtworkStatus = (artworkStatus: number) => ArtworkStatusEnumMap.includes(artworkStatus);