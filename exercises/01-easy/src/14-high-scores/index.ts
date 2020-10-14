/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  last: number;
  sorted: number[];
  constructor(scores: number[]) {
    // This is terrible way, I know! Ksshhshshs...
    this.last = scores[scores.length-1];
    this.scores = scores;
    this.sorted = [...this.scores].sort((a, b) => { return a >= b ? 1 : -1 }).reverse();
    console.log(this.scores, this.sorted);
  }

  get latest(): number {
    return this.last;
  }

  get personalBest(): number {
    return this.sorted[0];
  }

  get personalTopThree(): number[] {
    return [...this.sorted].splice(0, 3);
  }
}

export { HighScores };
