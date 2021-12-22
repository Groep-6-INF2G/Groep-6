using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Git_clone.Models;
using System.Collections.Generic;
using System.Linq;

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
            if (users.FirstOrDefault(x => x.Email == loginInfo.Email && x.Password == loginInfo.Password) is User user)
            {
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
