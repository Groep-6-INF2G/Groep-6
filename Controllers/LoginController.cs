using Git_clone.Models;
using Git_clone.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections;
using Microsoft.EntityFrameworkCore;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {    
 
        public ActionResult CheckLogin(LoginInfo info)
        {
            if(info.Password != null && info.Email != null) 
            {
                HttpContext.Items.Add("login", info);
               //return RedirectToAction("checkData", "UserController", new { login = info });
            }
            return BadRequest();
        }

        [HttpPost]
        public ActionResult fetchData(bool result)
        {
            if (result == true)
            {
                return Ok();
            }
            return NotFound();
        }

    }
}
