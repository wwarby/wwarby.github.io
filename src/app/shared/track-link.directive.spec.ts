import { TrackLinkDirective } from './track-link.directive';
import { Angulartics2 } from 'angulartics2';

describe('TrackLinkDirective', () => {

  const mockElFactory = () => {
    return {
      nativeElement: {
        getAttribute: (name: string) => 'test'
      }
    };
  };

  const mockAngularticsFactory = () => {
    return {
      pageTrack: {
        next: (value: {path: string}) => {}
      }
    };
  };

  it('should create an instance', () => {
    const directive = new TrackLinkDirective(mockElFactory(), mockAngularticsFactory() as Angulartics2);
    expect(directive).toBeTruthy();
  });

  it('should track links', () => {
    const directive = new TrackLinkDirective(mockElFactory(), mockAngularticsFactory() as Angulartics2);
    const spy = spyOn(directive['angulartics'].pageTrack, 'next');
    directive.onClick({} as MouseEvent);
    expect(spy).toHaveBeenCalledWith({path: '/external/test'});
  });

});
