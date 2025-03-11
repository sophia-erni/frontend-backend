using System.Linq.Expressions;

namespace QuizApp.Repositories
{
    public interface IBaseRepository<T>
    {

        Task<List<T>> GetAll(params Expression<Func<T, object>>[] includes);
        //Helps with the query some data where relationship comes in??

        Task<T> Get(long id, params Expression<Func<T, object>>[] includes);

        Task<T> GetByIdAsync(long id);
        Task<List<T>> GetAllAsync();

        void Add(T entity); //where this generates, help to create 
        void Update(T entity);
        void Delete(long id);
    }
}
