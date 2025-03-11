using System.Linq.Expressions;
using Azure;
using Microsoft.EntityFrameworkCore;
using QuizApp.Data;

namespace QuizApp.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        protected readonly DbSet<T> Context;
        private readonly AppDbContext _context;

        public BaseRepository(AppDbContext context)
        {
            Context = context.Set<T>();
            _context = context;
        }

        public void Add(T entity)
        {
            Context.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(long id)
        {
            var entity = Context.Find(id);
            if (entity != null)
            {
                Context.Remove(entity);
                _context.SaveChanges();
            }
        }

        public async Task<T> Get(long id, params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = Context;
            query = includes.Aggregate(query, (current, include) => current.Include(include));
            return await query.FirstOrDefaultAsync();
        }



        public Task<List<T>> GetAll(params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = Context;
            query = includes.Aggregate(query, (current, include) => current.Include(include));
            return query.ToListAsync();
        }

        public async Task<List<T>> GetAllAsync()
        {
            return await Context.ToListAsync();
        }

        public async Task<T> GetByIdAsync(long id)
        {
            return await Context.FindAsync(id);
        }

        public void Update(T entity)
        {
            Context.Update(entity);
            _context.SaveChanges();
        }
    }
}
