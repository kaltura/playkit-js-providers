//@flow
import ServiceResult from '../../common/base-service-result';
import {KalturaQuiz} from './kaltura-quiz';

export class KalturaQuizResponse extends ServiceResult {
  data: KalturaQuiz;

  constructor(responseObj: Object) {
    super(responseObj);
    if (!this.hasError) {
      this.data = new KalturaQuiz(responseObj);
    }
  }
}
