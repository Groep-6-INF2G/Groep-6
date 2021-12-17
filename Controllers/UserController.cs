using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Git_clone.Models;
using System.Linq;
using System;


namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase // /user
    {
        private dataBaseContext _databaseContext;

        public LoginInfo log;

        public UserController(dataBaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet("")] // => "/" 


        public ActionResult checkData()
        {
                       
            var login = HttpContext.Items["login"] as LoginInfo;

            //var query = _databaseContext.Users.AsQueryable().Where(x => x.email == login.Email && x.password == login.Password).ToList();


            if (login != null)
            {
                return RedirectToAction("fetchData", "LoginController", new {result = true} );
            }
            return RedirectToAction("fetchData", "LoginController", new { result = false });
        }

        public LoginInfo ShowResult()
        {
            return HttpContext.Items["login"] as LoginInfo;
        }
        
   }
}
