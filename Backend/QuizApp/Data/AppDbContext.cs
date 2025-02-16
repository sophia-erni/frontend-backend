using Microsoft.EntityFrameworkCore;
using QuizApp.Models;

namespace QuizApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Questions> Questions { get; set; }
        public DbSet<Answers> Answers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Define primary key
            modelBuilder.Entity<Questions>()
                .HasKey(q => q.QuestionId);

            modelBuilder.Entity<Answers>()
                .HasKey(a => a.AnswerId); // Define primary key

            modelBuilder.Entity<Questions>()
                .HasOne(q => q.Answer)
                .WithOne(a => a.Question)
                .HasForeignKey<Answers>(a => a.QuestionId);

            base.OnModelCreating(modelBuilder);
        }

    }
    
}
