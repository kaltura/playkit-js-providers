//@flow
export class KalturaUserEntry {
  static UserEntryStatus: {[status: string]: string} = {
    active: '1',
    deleted: '2',
    quizSubmitted: 'quiz.3'
  };

  static UserEntryType: {[status: string]: string} = {
    quiz: 'quiz.QUIZ',
    registration: 'registration.REGISTRATION',
    viewHistory: 'viewHistory.VIEW_HISTORY',
    watchLater: 'watchLater.WATCH_LATER'
  };

  id: string;
  entryId: string;
  userId: string;
  partnerId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  type: string;

  constructor(userEntry: Object) {
    this.id = userEntry.id;
    this.entryId = userEntry.entryId;
    this.userId = userEntry.userId;
    this.partnerId = userEntry.partnerId;
    this.status = userEntry.status;
    this.createdAt = userEntry.createdAt;
    this.updatedAt = userEntry.updatedAt;
    this.type = userEntry.type;
  }
}
