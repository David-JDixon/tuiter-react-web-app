import QList from "./QuizListScreen";
function Quizzes() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <h2>Quizzes</h2>
                    <QList />
            </div>
        </div>
    </div>
    );
}
export default Quizzes;