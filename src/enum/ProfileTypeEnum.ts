export enum ProfileTypeEnum {
  ADMIN = 1,
  ARTIST = 2,
  TANNER = 3
}

const ProfileTypeEnumMap = [ ProfileTypeEnum.ADMIN, ProfileTypeEnum.ARTIST, ProfileTypeEnum.TANNER ];

export const isProfileType = (profileType: number) => {
  return ProfileTypeEnumMap.includes(profileType);
}