using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Threading;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Git_clone.Controllers;

namespace Git_clone
{
    public class Program
    {
        public static ListChecker Checker { get; set; }
        public static void Main(string[] args)
        {
            Checker = new ListChecker();
            var pthread = new Thread(Checker.CheckVerification);
            pthread.IsBackground = true;
            pthread.Start();
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
