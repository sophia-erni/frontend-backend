using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
    public class Answers
    {
        public int AnswerId { get; set; }
        public string Answer {  get; set; }

        //[ForeignKey("Question")]
        public int QuestionId { get; set; }
        public  Questions Question { get; set; }
    }
}
