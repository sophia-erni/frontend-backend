using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
    //primary key
    public class Questions
    {
        [Key]
        public long Id { get; set; }
        public string Question {  get; set; }
        public string Answer    { get; set; }

        [ForeignKey("Users")]
        public long UserId { get; set; }
        public Users Users { get; set; }

    }
}
