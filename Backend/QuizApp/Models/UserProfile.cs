namespace QuizApp.Models
{
    public class UserProfile
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public long UserId { get; set; }
        public Users Users { get; set; }
        public ICollection<Questions> Question { get; set; }


    }
}
