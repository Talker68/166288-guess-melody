import assert from 'assert';
import {setCurrentQuestion, setTime, setLives} from './game-helpers';


describe('model-methods', function () {

  describe('#setCurrentQuestion()', function () {
    it('Should throw an error if currentQuestion < 0', function () {
      assert.throws(() => setCurrentQuestion({currentQuestion: 6}, -12));
    });
    it('Should throw an error if currentQuestion > 10', function () {
      assert.throws(() => setCurrentQuestion({currentQuestion: 6}, 12));
    });
    it('currentQuestion successfully changed', function () {
      assert.equal(setCurrentQuestion({currentQuestion: 3}, 2).currentQuestion, 2);
    });
  });

  describe('#setTime()', function () {
    it('Should throw an error if time < 0', function () {
      assert.throws(() => setTime({timer: 0}, -10));
    });
    it('Timer successfully changed', function () {
      assert.equal(setTime({timer: 3}, 19).timer, 19);
    });
  });

  describe('#setLives()', function () {
    it('Should throw an error if lives < 0', function () {
      assert.throws(() => setLives({lives: 3}, -3));
    });
    it('Should throw an error if lives > 3', function () {
      assert.throws(() => setLives({lives: 3}, 4));
    });
    it('Number of Lives successfully changed', function () {
      assert.equal(setLives({lives: 3}, 1).lives, 1);
    });
  });

});
