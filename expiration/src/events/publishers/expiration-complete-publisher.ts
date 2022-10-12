import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@uttickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
