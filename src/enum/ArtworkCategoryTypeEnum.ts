export enum ArtworkCategoryTypeEnum {
  LITERARY = 1,
  AESTHETIC = 2,
}

const ArtworkCategoryTypeEnumMap = [ ArtworkCategoryTypeEnum.LITERARY, ArtworkCategoryTypeEnum.AESTHETIC ];

export const isCategoryType = (categoryType: number) => {
  return ArtworkCategoryTypeEnumMap.includes(categoryType);
}