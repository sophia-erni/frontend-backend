using QuizApp.Models;

namespace QuizApp.DTOs
{
    //public class UpdateUserProfile
    //{

    //}
    public class GetUserProfile
    {
        public long Id { get; set; }
    }
    public class DeleteUserProfile
    {
        public long Id { get; set; }
    }
    public class GetUserProfileDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public Users Users { get; set; }
        public ICollection<Questions> QuestioN {  get; set; }
    }
}
