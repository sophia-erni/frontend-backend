namespace QuizApp.DTOs
{

    public class CreateQuestion
    {
        public string Question { get; set; }
    }
    public class UpdateQuestion
    {
        public string Question { get; set; }
    }
    public class DeleteQuestion
    {
        public int QuestionId { get; set; }
    }
    public class GetQuestion
    {
        public string QuestionId { get; set; }
    }

    public class GetQuestionDto
    {
        public int QuestionId { get; set; }
        public string Question { get; set; }
        public int AnswerId { get; set; }

    }


}
