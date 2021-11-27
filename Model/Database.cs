using System;
using System.IO;
using Npgsql;

namespace Database
{
    public class NPGSQL
    {
        public NpgsqlConnection databaseConnection;

        public NPGSQL()
        {
            databaseConnection = new NpgsqlConnection("Host=145.24.222.54; Username=postgres;Password=team6;Database=postgres;Port=8011;IncludeErrorDetail=true");
        }

        public void selectAllSQL()
        {

            using var connection = databaseConnection;
            connection.Open();
            var sql = "SELECT * FROM locations"; ;

            using var cmd = new NpgsqlCommand(sql, connection);
            using NpgsqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                Console.WriteLine("{0} {1} {2} {3} {4} {5}", rdr.GetString(0), rdr.GetString(1),
                        rdr.GetString(2), rdr.GetString(3), rdr.GetString(4), rdr.GetString(5));
            }

            //createTable(connection);
            //addLocations(connection);
        }


        // 2 Methods for creating a table and adding data if needed
        /*
        public void createTable(NpgsqlConnection newConnection)
        {
            NpgsqlCommand createLocationTable = new NpgsqlCommand(
           "CREATE TABLE IF NOT EXISTS locations" +
           "(ID SERIAL PRIMARY KEY," +
           "location TEXT," +
           "locationDescription TEXT," +
           "address TEXT," +
           "postalCode TEXT," +
           "locationTime TEXT," +
           "appointmentDescription TEXT)"
           , newConnection);
            createLocationTable.ExecuteNonQuery();
            createLocationTable.Connection = newConnection;
        }


        public void addLocations(NpgsqlConnection newConnection)
        {
           string line = "";
           using (StreamReader file = new StreamReader(@".\Controllers\priklocatie_sanitized.sql"))
            {
                while ((line = file.ReadLine()) != null)
                {
                    string[] fields = line.Split(',');
                    NpgsqlCommand cmd = new NpgsqlCommand("INSERT INTO locations(location, locationDescription, address,postalCode, locationTime, appointmentDescription) VALUES (@location, @locationDescription, @address, @postalCode, @locationTime, @appointmentDescription)", newConnection);
                    cmd.Parameters.AddWithValue("@location", fields[0].ToString());
                    cmd.Parameters.AddWithValue("@locationDescription", fields[1].ToString());
                    cmd.Parameters.AddWithValue("@address", fields[2].ToString());
                    cmd.Parameters.AddWithValue("@postalCode", fields[3].ToString());
                    cmd.Parameters.AddWithValue("@locationTime", fields[4].ToString());
                    cmd.Parameters.AddWithValue("@appointmentDescription", fields[5].ToString());
                    cmd.ExecuteNonQuery();
                }
            }
        }*/

    }
}



    
