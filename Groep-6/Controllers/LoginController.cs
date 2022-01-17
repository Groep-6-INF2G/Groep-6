using Microsoft.AspNetCore.Mvc;
using Git_clone.Models;
using System.Linq;
using System;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private DatabaseContext _databaseContext;

        public LoginController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpPost]
        public StatusCodeResult CheckLogin(LoginInfo loginInfo)
        {
            var users = _databaseContext.Users.ToList();

            if (users.FirstOrDefault(x => x.Email == loginInfo.Email && x.Password == loginInfo.Password) is not null)
            { 
                int vCode = Mailsend.sendmail(loginInfo.Email);
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
