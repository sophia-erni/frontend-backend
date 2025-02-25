using System.Linq.Expressions;

namespace QuizApp.Repositories
{
    public interface IBaseRepository<T>
    {

        Task<List<T>> GetAll(params Expression<Func<T, object>>[] includes);
        //Helps with the query some data where relationship comes in??

        Task<T> Get(long id, params Expression<Func<T, object>>[] includes);


        Task<T> Add(T entity); //where this generates, help to create 
        Task<T> Update(T entity);
        Task<T> Delete(long id);
    }
}
