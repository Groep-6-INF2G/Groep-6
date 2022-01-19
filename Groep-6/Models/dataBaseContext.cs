using Microsoft.EntityFrameworkCore;

namespace Groep6.Models
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Page> Pages { get; set; }
        public DbSet<Section> Sections { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) {}
    }
}
