using System;
using Npgsql;


    
var cs = "Host=145.24.222.54;Username=postgres;Password=s$cret;Database=testdb";

using var con = new NpgsqlConnection(cs);
con.Open();

var sql = "SELECT version()";

using var cmd = new NpgsqlCommand(sql, con);

var version = cmd.ExecuteScalar().ToString();
Console.WriteLine($"PostgreSQL version: {version}");
    
