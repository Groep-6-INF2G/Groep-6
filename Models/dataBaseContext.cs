using Microsoft.EntityFrameworkCore;

namespace Git_clone.Models
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User>Users { get; set; }
        public DbSet<Location>Locations { get; set; }
        public DbSet<Page> Pages { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) {}
    }
}
