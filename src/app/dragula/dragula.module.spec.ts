import { DragulaModule } from './dragula.module';

describe('DragulaModule', () => {
  let dragulaModule: DragulaModule;

  beforeEach(() => {
    dragulaModule = new DragulaModule();
  });

  it('should create an instance', () => {
    expect(dragulaModule).toBeTruthy();
  });
});
