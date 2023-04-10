export default class User {
   constructor(username, points, difficulty, accuracy, correct_answers) {
      this.username = username;
      this.points = points;
      this.difficulty = difficulty;
      this.accuracy = accuracy;
      this.correct_answers = correct_answers;
   }
}