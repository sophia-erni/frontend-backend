using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
    //primary key
    public class Questions
    {
        [Key]
        public int QuestionId { get; set; }
        public string Question {  get; set; }
        public string Answer    { get; set; }

    }
}
