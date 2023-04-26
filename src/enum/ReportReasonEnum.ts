export enum ReportReasonArtworkEnum {
  AGE_GROUPE = 1,
  PLAGIARISM = 2,
  WRONG_CATEGORY = 3,
  MY_AUTHORSHIP = 4,
  NONSENSE_IMAGES = 5,
}

export enum ReportReasonCommentEnum {
  SPAM = 1,
  SEXUAL_ACTIVITY = 2,
  HAT_SPEECH = 3,
  FAKE_NEWS = 4,
  BULLYNG = 5,
}

const ReportReasonArtworkEnumMap = [ 
  ReportReasonArtworkEnum.AGE_GROUPE,
  ReportReasonArtworkEnum.PLAGIARISM,
  ReportReasonArtworkEnum.WRONG_CATEGORY,
  ReportReasonArtworkEnum.MY_AUTHORSHIP,
  ReportReasonArtworkEnum.NONSENSE_IMAGES,
];

const ReportReasonCommentEnumMap = [ 
  ReportReasonCommentEnum.SPAM,
  ReportReasonCommentEnum.SEXUAL_ACTIVITY,
  ReportReasonCommentEnum.HAT_SPEECH,
  ReportReasonCommentEnum.FAKE_NEWS,
  ReportReasonCommentEnum.BULLYNG,
];

export const isReportReasonArtwork = (reportReason: number) => {
  return ReportReasonArtworkEnumMap.includes(reportReason);
}
export const isReportReasonComment = (reportReason: number) => {
  return ReportReasonCommentEnumMap.includes(reportReason);
}