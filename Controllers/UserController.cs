using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Git_clone.Models;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase // /user
    {
        private dataBaseContext _databaseContext;

        public UserController(dataBaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet("")] // => "/" 

        public IEnumerable<user> Get()
        {
            return _databaseContext.Users;
        }


    }
}
