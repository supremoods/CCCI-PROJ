//state
export const state = () => ({
   username: null,
   points: null,
   difficulty: null,
   accuracy: null,
   correct_answers: null,
})

//state
export const getters = {
   username: state => state.username,
   points: state => state.points,
   difficulty: state => state.difficulty,
   accuracy: state => state.accuracy,
   correct_answers: state => state.correct_answers,
}

//mutations 
export const mutations = {
   SET_USERNAME(state, username) {
      state.username = username;
   },
   SET_POINTS(state, points) {
      state.points = points;
   },
   SET_DIFFICULTY(state, difficulty) {
      state.difficulty = difficulty;
   },
   SET_ACCURACY(state, accuracy) {
      state.accuracy = accuracy;
   },
   SET_CORRECT_ANSWERS(state, correct_answers) {
      state.correct_answers = correct_answers;
   }

}

