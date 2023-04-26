export enum ArtworkTagEsteticaEnum {
  TRESD = 1,
  ANIMAL = 2,
  CIENTIFICO = 3,
  COSPLAY = 4,
  CUSTOMIZACAO = 5,
  DIGITAL = 6,
  EMOJI = 7,
  ESCULTURA = 8,
  EXCENTRICO = 9,
  FANTASIA = 10,
  FOTOGRAFIA = 11,
  JOGO = 12,
  NERD = 13,
  NUDE = 14,
  PAISAGEM = 15,
  PIXEL = 16,
  QUADRO = 17,
  REALISMO = 18,
  TECNOLOGIA = 19,
  WALLPAPER = 20,
}

export enum ArtworkTagLiterariaEnum {
  ACAO = 1,
  ADULTO = 2,
  AVENTURA = 3,
  CIENCIA = 4,
  COMEDIA = 5,
  CONTO = 6,
  DRAMA = 7,
  ESPIRITURAL = 8,
  FANFIC = 9,
  FANTASIA = 10,
  FICCAO = 11,
  HQ = 12,
  INFANTIL = 13,
  MISTERIO = 14,
  POESIA = 15,
  PROGRAMACAO = 16,
  REAL = 17,
  ROMANCE = 18,
  TERROR = 19,
  TUTORIAL = 20,
}

export const ArtworkTagEsteticaEnumMap = [
  { type: ArtworkTagEsteticaEnum.TRESD, name: '3D' },
  { type: ArtworkTagEsteticaEnum.ANIMAL, name: 'ANIMAL' },
  { type: ArtworkTagEsteticaEnum.CIENTIFICO, name: 'CIENTÍFICO' },
  { type: ArtworkTagEsteticaEnum.COSPLAY, name: 'COSPLAY' },
  { type: ArtworkTagEsteticaEnum.CUSTOMIZACAO, name: 'CUSTOMIZAÇÃO' },
  { type: ArtworkTagEsteticaEnum.DIGITAL, name: 'DIGITAL' },
  { type: ArtworkTagEsteticaEnum.EMOJI, name: 'EMOJI' },
  { type: ArtworkTagEsteticaEnum.ESCULTURA, name: 'ESCULTURA' },
  { type: ArtworkTagEsteticaEnum.EXCENTRICO, name: 'EXCÊNTRICO' },
  { type: ArtworkTagEsteticaEnum.FANTASIA, name: 'FANTASIA' },
  { type: ArtworkTagEsteticaEnum.FOTOGRAFIA, name: 'FOTOGRAFIA' },
  { type: ArtworkTagEsteticaEnum.JOGO, name: 'JOGO' },
  { type: ArtworkTagEsteticaEnum.NERD, name: 'NERD' },
  { type: ArtworkTagEsteticaEnum.NUDE, name: 'NUDE' },
  { type: ArtworkTagEsteticaEnum.PAISAGEM, name: 'PAISAGEM' },
  { type: ArtworkTagEsteticaEnum.PIXEL, name: 'PIXEL' },
  { type: ArtworkTagEsteticaEnum.QUADRO, name: 'QUADRO' },
  { type: ArtworkTagEsteticaEnum.REALISMO, name: 'REALISMO' },
  { type: ArtworkTagEsteticaEnum.TECNOLOGIA, name: 'TECNOLOGIA' },
  { type: ArtworkTagEsteticaEnum.WALLPAPER, name: 'WALLPAPER' },
];

export const ArtworkTagLiterariaEnumMap = [
  { type: ArtworkTagLiterariaEnum.ACAO, name: 'AÇÃO' },
  { type: ArtworkTagLiterariaEnum.ADULTO, name: 'ADULTO' },
  { type: ArtworkTagLiterariaEnum.AVENTURA, name: 'AVENTURA' },
  { type: ArtworkTagLiterariaEnum.CIENCIA, name: 'CIÊNCIA' },
  { type: ArtworkTagLiterariaEnum.COMEDIA, name: 'COMÉDIA' },
  { type: ArtworkTagLiterariaEnum.CONTO, name: 'CONTO' },
  { type: ArtworkTagLiterariaEnum.DRAMA, name: 'DRAMA' },
  { type: ArtworkTagLiterariaEnum.ESPIRITURAL, name: 'ESPIRITUAL' },
  { type: ArtworkTagLiterariaEnum.FANFIC, name: 'FANFIC' },
  { type: ArtworkTagLiterariaEnum.FANTASIA, name: 'FANTASIA' },
  { type: ArtworkTagLiterariaEnum.FICCAO, name: 'FICÇÃO' },
  { type: ArtworkTagLiterariaEnum.HQ, name: 'HQ' },
  { type: ArtworkTagLiterariaEnum.INFANTIL, name: 'INFANTIL' },
  { type: ArtworkTagLiterariaEnum.MISTERIO, name: 'MISTÉRIO' },
  { type: ArtworkTagLiterariaEnum.POESIA, name: 'POESIA' },
  { type: ArtworkTagLiterariaEnum.PROGRAMACAO, name: 'PROGRAMAÇÃO' },
  { type: ArtworkTagLiterariaEnum.REAL, name: 'REAL' },
  { type: ArtworkTagLiterariaEnum.ROMANCE, name: 'ROMANCE' },
  { type: ArtworkTagLiterariaEnum.TERROR, name: 'TERROR' },
  { type: ArtworkTagLiterariaEnum.TUTORIAL, name: 'TUTORIAL' },
];

export const returnArtworkTagEsteticaEnum = (name: string) => {
  return ArtworkTagEsteticaEnumMap.find((o: any) => o.name === name)?.type;
}

export const returnArtworkTagEsteticaName = (type: number) => {
  return ArtworkTagEsteticaEnumMap.find((o: any) => o.type === type)?.name;
}

export const returnArtworkTagLiterariaEnum = (name: string) => {
  return ArtworkTagLiterariaEnumMap.find((o: any) => o.name === name)?.type;
}

export const returnArtworkTagLiterariaName = (type: number) => {
  return ArtworkTagLiterariaEnumMap.find((o: any) => o.type === type)?.name;
}