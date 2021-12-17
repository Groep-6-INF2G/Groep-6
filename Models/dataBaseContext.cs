using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Git_clone.Models
{
    public class dataBaseContext : DbContext
    {
        public DbSet<user>Users { get; set; }
        public DbSet<Location>Locations { get; set; }

        public dataBaseContext(DbContextOptions<dataBaseContext> options) : base(options)
        {

        }


    }
}
