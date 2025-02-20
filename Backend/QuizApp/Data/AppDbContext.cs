using Microsoft.EntityFrameworkCore;
using QuizApp.Models;

namespace QuizApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<Questions> Questions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Questions>()
                .HasKey(q => q.UsersId);
            modelBuilder.Entity<Questions>()
                .HasOne<Users>(q => q.Users)
                .WithMany(u => u.Question)
                .HasForeignKey(q => q.UsersId);
        }

    }
    
}
