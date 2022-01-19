using Microsoft.EntityFrameworkCore;

namespace Groep6.Models
{
    public class DatabaseContext : DbContext
    {
        public DbSet<UserModel> Users { get; set; }
        public DbSet<LocationModel> Locations { get; set; }
        public DbSet<PageModel> Pages { get; set; }
        public DbSet<SectionModel> Sections { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) {}
    }
}
