using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
    //primary key
    public class Questions
    {
        public int QuestionId { get; set; }
        public string Question {  get; set; }
        public Answers Answer { get; set; }

    }
}
