export enum ReportReferenceTypeEnum {
  ARTWORK = 1,
  COMMENT = 2,
}

const ReportReferenceTypeEnumMap = [
  ReportReferenceTypeEnum.ARTWORK,
  ReportReferenceTypeEnum.COMMENT,
];

export const isReportReferenceType = (referenceType: number) => {
  return ReportReferenceTypeEnumMap.includes(referenceType);
};