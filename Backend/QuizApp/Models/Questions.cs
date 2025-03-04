using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
    public class Questions
    {
        [Key]
        public long Id { get; set; }
        public string Question {  get; set; }
        public string Answer    { get; set; }

        [ForeignKey("UserProfiles")]
        public long UserProfileId { get; set; }
        public UserProfiles UserProfile { get; set; }


    }
}
