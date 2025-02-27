namespace QuizApp.DTOs
{

    public class CreateQuestion
    {
        public string Question { get; set; }
        public string Answer { get; set; }
        public long UserId { get; set; }
    }
    public class UpdateQuestion
    {
        public string Question { get; set; }
        public string Answer { get; set; }
        
        public long Id { get; set; }
    }
    public class DeleteQuestion
    {
        public long Id { get; set; }
    }
    public class GetQuestion
    {
        public long Id { get; set; }
    }

    public class GetQuestionDto
    {
        public long Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public long UserId { get; set; }

    }


}
