using QuizApp.Models;

namespace QuizApp.Repositories
{
    public interface IQuestionRepository : IBaseRepository<Questions>
    {
        Task<Questions> GetQuestionsAsync(string title);
    }
}
