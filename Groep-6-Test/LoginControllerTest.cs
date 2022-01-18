using Microsoft.VisualStudio.TestTools.UnitTesting;
using Git_clone.Controllers;
using Git_clone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace Groep_6_Test
{
    [TestClass]
    public class LoginControllerTest
    {
        LoginController _controller;
        public LoginControllerTest()
        {
            DbContextOptionsBuilder<DatabaseContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseNpgsql(@"Host=145.24.222.54; Username=postgres;Password=team6;Database=postgres;Port=8011;");
            var options = dbContextOptionsBuilder.Options;
            DatabaseContext databaseContext = new(options);
            _controller = new LoginController(databaseContext);
        }

        [TestMethod]
        public void TestMethod1()
        {
            var loginInfo = new LoginInfo()
            {
                Email = "oscar.vugt@gmail.com",
                Password = "test123"
            };
            var result = _controller.CheckLogin(loginInfo);
            var expected = new StatusCodeResult(200);
            Assert.AreEqual(expected.StatusCode, result.StatusCode);
        }

        [TestMethod]
        public void TestMethod2()
        {
            var loginInfo = new LoginInfo()
            {
                Email = "oscar.vugt@gmail.com",
                Password = "wrong_password"
            };
            var result = _controller.CheckLogin(loginInfo);
            var notExpected = new StatusCodeResult(200);
            Assert.AreNotEqual(notExpected.StatusCode, result.StatusCode);
        }
    }
}
