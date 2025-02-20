using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
    //primary key
    public class Questions
    {
    
        public int QuestionId { get; set; }
        public string Question {  get; set; }
        public string Answer    { get; set; }

        
        public int UsersId { get; set; }
        public Users Users { get; set; }

    }
}
