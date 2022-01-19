using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Threading;
using Groep6.Utils;

namespace Groep6
{
    public class Program
    {
        public static ListChecker Checker { get; set; } = new ListChecker();
        public static void Main(string[] args)
        {
            var pthread = new Thread(Checker.CheckVerification)
            {
                IsBackground = true
            };
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
