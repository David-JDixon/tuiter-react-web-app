import mongoose from 'mongoose';
import quizSchema from './quizSchema';
const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;