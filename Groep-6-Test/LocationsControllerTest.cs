using Microsoft.VisualStudio.TestTools.UnitTesting;
using Groep6.Controllers;
using Groep6.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Groep_6_Test
{
    [TestClass]
    public class LocationsControllerTest
    {
        private readonly LocationsController _controller;
        public LocationsControllerTest()
        {
            DbContextOptionsBuilder<DatabaseContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseNpgsql(@"Host=145.24.222.54; Username=postgres;Password=team6;Database=postgres;Port=8011;");
            var options = dbContextOptionsBuilder.Options;
            DatabaseContext databaseContext = new(options);
            _controller = new LocationsController(databaseContext);
        }

        [TestMethod]
        public void GetClosest_test_if_query_returns_closest()
        {
            //Arrange
            string input = "[51.981758741653408,4.4652486985853272]";
            int expected_1 = 125;
            int expected_2 = 126;
            int expected_3 = 169;
            //Act
            List<LocationModel> results = _controller.GetClosest(input).ToList();
            int actual_1 = results[0].id;
            int actual_2 = results[1].id;
            int actual_3 = results[2].id;
            //Assert
            Assert.AreEqual(expected_1, actual_1);
            Assert.AreEqual(expected_2, actual_2);
            Assert.AreEqual(expected_3, actual_3);
        }
        [TestMethod]
        public void GetClosest_test_if_query_doesnt_return_same_locations_every_time()
        {
            //Arrange
            string input = "[51.908668839330176,4.0913723987021342]";
            int expected_1 = 125;
            int expected_2 = 126;
            int expected_3 = 169;
            //Act
            List<LocationModel> results = _controller.GetClosest(input).ToList();
            int actual_1 = results[0].id;
            int actual_2 = results[1].id;
            int actual_3 = results[2].id;
            //Assert
            Assert.AreNotEqual(expected_1, actual_1);
            Assert.AreNotEqual(expected_2, actual_2);
            Assert.AreNotEqual(expected_3, actual_3);
        }
    }
}
