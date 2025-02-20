using QuizApp.Models;

namespace QuizApp.DTOs
{
    public class CreateUser
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class UpdateUser
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class DeleteUser
    {
        public int UserId { get; set; }

    }

    public class GetUser
    { public int UserId { get; set;} }

    public class GetUserDto
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ICollection<Questions> Questions { get; set; }

    }

}
