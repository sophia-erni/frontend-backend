using Microsoft.EntityFrameworkCore;
using QuizApp.Data;
using QuizApp.Models;

namespace QuizApp.Repositories
{
    public class QuestionRepository : BaseRepository<Questions>, IQuestionRepository
    {

        public QuestionRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Questions> GetQuestionsAsync(string title)
        {
            return await Context.Where(x=>x.Question == title).FirstOrDefaultAsync();
        }
    }
}
