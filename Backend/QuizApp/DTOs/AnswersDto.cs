namespace QuizApp.DTOs
{
    
    public class CreateAnswer
    {
        public string Answer {  get; set; }
    }
    public class UpdateAnswer
    {
        public string Answer {  get; set; }
    }
    public class DeleteAnswer
    {
        public int AnswerId {  get; set; }
    }
    public class GetAnswer
    {
        public string AnswerId { get; set; }
    }

    public class GetAnswerDto
    {
        public int AnswerId { get; set; }
        public string Answer { get; set; }
        public int QuestionId { get; set; }

    }


}
