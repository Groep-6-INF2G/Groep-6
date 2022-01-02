using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Git_clone.Models;
using System.Collections.Generic;
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
        public ActionResult CheckLogin(LoginInfo loginInfo)
        {
            var users = _databaseContext.Users.ToList();
            User userInfo = new();
            Random rand = new Random();

            if (users.FirstOrDefault(x => x.Email == loginInfo.Email && x.Password == loginInfo.Password) is User user)
            {
                HttpContext.Response.Cookies.Append("id", rand.Next().ToString(), new CookieOptions
                {
                    Expires = System.DateTimeOffset.Now.AddDays(1)
                });

                var jsonUser = JsonSerializer.Serialize(user);
                return Ok(jsonUser);
            }
            else
            {
                return StatusCode(401);
            }
        }
    }
}
