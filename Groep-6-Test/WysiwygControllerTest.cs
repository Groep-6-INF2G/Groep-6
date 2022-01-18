using Microsoft.VisualStudio.TestTools.UnitTesting;
using Git_clone.Controllers;
using Git_clone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
namespace Groep_6_Test
{
    [TestClass]
    public class WysiwygControllerTest
    {
        WysiwygController _controller;
        public WysiwygControllerTest()
        {
            DbContextOptionsBuilder<DatabaseContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseNpgsql(@"Host=145.24.222.54; Username=postgres;Password=team6;Database=postgres;Port=8011;");
            var options = dbContextOptionsBuilder.Options;
            DatabaseContext databaseContext = new(options);
            _controller = new WysiwygController(databaseContext);
        }

        [TestMethod]
        public void TablePageTest()
        {
            var result =  _controller.Get(-1);
            var expected = "{\"pageId\":-1,\"pageData\":\"Unit Test\"}";
            Assert.AreEqual(expected, result);
        }

        [TestMethod]
        public void TablePageWrongTest()
        {
            var result = _controller.Get(-1);
            var expected = "{\"pageId\":-1,\"pageData\":\"NotExpectedOutput\"}";
            Assert.AreNotEqual(expected, result);
        }
        [TestMethod]
        public void TableSectionTest()
        {
            var result = _controller.Get(-2);
            var expected = "[{\"sectionid\":-1,\"sectiondata\":\"Unit Test1\",\"pageid\":-2},{\"sectionid\":-2,\"sectiondata\":\"Unit Test2\",\"pageid\":-2}]";
            Assert.AreEqual(expected, result);
        }
        [TestMethod]
        public void TableSectionWrongTest()
        {
            var result = _controller.Get(-2);
            var expected = "[:)]";
            Assert.AreNotEqual(expected, result);
        }
        [TestMethod]
        public void InsertPageTest()
        {
            Page page = new();
            page.pageId = -3;
            page.pageData = "test";
            _controller.InsertPage(page);
            var result = _controller.Get(-3);
            var expected = "{\"pageId\":-3,\"pageData\":\"test\"}";
            Assert.AreEqual(expected, result);
        }
        [TestMethod]
        public void InsertPageWrongTest()
        {
            Page page = new();
            page.pageId = -3;
            page.pageData = "test";
            _controller.InsertPage(page);
            var result = _controller.Get(-3);
            var expected = "NotTheResult";
            Assert.AreNotEqual(expected, result);
        }
        [TestMethod]
        public void InsertSectionTest()
        {
            Section section = new();
            section.sectionid = -3;
            section.sectiondata = "test";
            section.pageid = -4;
            
            _controller.InsertSection(section);
            var result = _controller.Get(-4);
            var expected = "[{\"sectionid\":-3,\"sectiondata\":\"test\",\"pageid\":-4}]";
            Assert.AreEqual(expected, result);
        }
        [TestMethod]
        public void InsertSectionWrongTest()
        {
            Section section = new();
            section.sectionid = -3;
            section.sectiondata = "test";
            section.pageid = -4;

            _controller.InsertSection(section);
            var result = _controller.Get(-4);
            var expected = "NotTheExpectedResult";
            Assert.AreNotEqual(expected, result);
        }
    }
}
