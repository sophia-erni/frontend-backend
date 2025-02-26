namespace QuizApp.Models
{
    public class Users
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public ICollection<Questions> Question {  get; set; }
        //public UserProfile UserProfile { get; set; }

    }
}
