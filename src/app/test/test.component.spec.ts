import {TestComponent} from './test.component';

describe('VoteComponent', ()=>{
    let testComponent: TestComponent;
    //set up
    beforeEach(() => {
        testComponent = new TestComponent();
    });

    // afterEach(()=>{})
    // beforeAll
    // afterall
    it('should increment totalVotes wehn upvoted', () => {
        //Act
        this.testComponent.upVote();
        //Assert
        expect(testComponent.totalVotes).toBe(1);
    });
    it('should decrement totalVotes when downvoted', () => {
        //Act
        this.testComponent.downVote();
        //Assert
        expect(testComponent.totalVotes).toBe(-1);
    });
})