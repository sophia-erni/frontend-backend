using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizApp.Models
{
    public class Users
    {
        [ForeignKey("UserProfiles")]
        public long Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role {  get; set; }
        public UserProfiles UserProfile { get; set; }

    }
}
