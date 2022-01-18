//@flow
export class KalturaQuiz {
  static ScoreType: {[score: string]: number} = {
    average: 5,
    first: 4,
    highest: 1,
    latest: 3,
    lowest: 2
  };

  static NullableBoolean: {[value: string]: number} = {
    falseValue: 0,
    nullValue: -1,
    trueValue: 1
  };

  version: number;
  uiAttributes: {key?: string, value?: string}[];
  showResultOnAnswer: boolean;
  showCorrectKeyOnAnswer: number;
  allowAnswerUpdate: boolean;
  showCorrectAfterSubmission: boolean;
  allowDownload: boolean;
  showGradeAfterSubmission: boolean;
  attemptsAllowed: number;
  scoreType: number;

  constructor(quiz: Object) {
    this.version = quiz.version;
    this.uiAttributes = quiz.uiAttributes;
    this.showResultOnAnswer = quiz.showResultOnAnswer;
    this.showCorrectKeyOnAnswer = quiz.showCorrectKeyOnAnswer;
    this.allowAnswerUpdate = quiz.allowAnswerUpdate;
    this.showCorrectAfterSubmission = quiz.showCorrectAfterSubmission;
    this.allowDownload = quiz.allowDownload;
    this.showGradeAfterSubmission = quiz.showGradeAfterSubmission;
    this.attemptsAllowed = quiz.attemptsAllowed;
    this.scoreType = quiz.scoreType;
  }
}
