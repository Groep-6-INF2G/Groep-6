﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Git_clone.Models
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User>Users { get; set; }
        public DbSet<Location>Locations { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }


    }
}