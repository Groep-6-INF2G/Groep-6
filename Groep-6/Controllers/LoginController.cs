using Microsoft.AspNetCore.Mvc;
using Groep6.Models;
using Groep6.Utils;
using System.Linq;
using System;

namespace Groep6.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;

        public LoginController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpPost]
        public StatusCodeResult CheckLogin(LoginInfo loginInfo)
        {
            var users = _databaseContext.Users.ToList();

            if (users.FirstOrDefault(dbUser => dbUser.Email == loginInfo.Email && dbUser.Password == loginInfo.Password) is not null)
            { 
                int vCode = MailUtil.SendMail(loginInfo.Email);
                var person = Tuple.Create(loginInfo.Email, vCode, DateTime.Now.AddMinutes(10));
                Program.Checker.PeopleList.Add(person);
                return Ok();
            }
            else
            {
                return StatusCode(401);
            }
        }
    }
}
