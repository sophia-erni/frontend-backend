namespace QuizApp.Models
{
    public class Users
    {
        public int UsersId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public ICollection<Questions> Question { get; set; }
    }
}
