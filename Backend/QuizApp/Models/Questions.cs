using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
    //primary key
    public class Questions
    {

        public long Id { get; set; }
        public string Question {  get; set; }
        public string Answer    { get; set; }

        
        public long UsersId { get; set; }
        public Users Users { get; set; }

    }
}
