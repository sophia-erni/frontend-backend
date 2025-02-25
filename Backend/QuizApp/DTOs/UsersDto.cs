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
        public long Id { get; set; }

    }

    public class GetUser
    { public long Id { get; set;} }

    public class GetUserDto
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ICollection<Questions> Questions { get; set; }

    }

}
