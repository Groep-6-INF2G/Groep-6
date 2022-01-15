using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Git_clone.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using Microsoft.AspNetCore.Authentication;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;

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
        public async Task<ActionResult> CheckLoginAsync(LoginInfo loginInfo)
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