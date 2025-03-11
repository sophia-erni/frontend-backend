using System.ComponentModel.DataAnnotations;

namespace QuizApp.Models
{
    public class Users
    {
        [Key]
        public long Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public ICollection<Questions> Question {  get; set; }
        //public UserProfile UserProfile { get; set; }

    }
}
