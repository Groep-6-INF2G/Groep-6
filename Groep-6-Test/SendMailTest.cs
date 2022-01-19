using Microsoft.VisualStudio.TestTools.UnitTesting;
using Groep6.Utils;

namespace Groep_6_Test
{
    [TestClass]
    public class SendMailTest
    {
        [TestMethod]
        public void MailSendsCorrectly()
        {
            var result = MailUtil.SendMail("brentdbr@hotmail.nl");
            Assert.AreNotEqual(0, result);
        }

        [TestMethod]
        public void MailIsInvalid()
        {
            var result = MailUtil.SendMail("invalidEmail");
            Assert.AreEqual(0, result);
        }
    }
}
