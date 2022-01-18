using Microsoft.VisualStudio.TestTools.UnitTesting;
using Git_clone.Controllers;
using Git_clone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace Groep_6_Test
{
    [TestClass]
    public class VerificationControllerTest
    {
        VerificationController _controller;
        public VerificationControllerTest()
        {
            _controller = new VerificationController();
        }

        [TestMethod]
        public void MailSendsCorrectly()
        {
            var result = Mailsend.sendmail("brentdbr@hotmail.nl");
            Assert.AreNotEqual(0, result);
        }

        [TestMethod]
        public void MailIsInvalid()
        {
            var result = Mailsend.sendmail("invalidEmail");
            Assert.AreEqual(0, result);
        }
    }
}
