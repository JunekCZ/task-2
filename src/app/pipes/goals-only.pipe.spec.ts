import { GoalsOnlyPipe } from './goals-only.pipe';

describe('GoalsOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new GoalsOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
