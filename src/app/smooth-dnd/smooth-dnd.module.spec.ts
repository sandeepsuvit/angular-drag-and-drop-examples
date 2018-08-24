import { SmoothDndModule } from './smooth-dnd.module';

describe('SmoothDndModule', () => {
  let smoothDndModule: SmoothDndModule;

  beforeEach(() => {
    smoothDndModule = new SmoothDndModule();
  });

  it('should create an instance', () => {
    expect(smoothDndModule).toBeTruthy();
  });
});
