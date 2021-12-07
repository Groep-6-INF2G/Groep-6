using Git_clone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public ActionResult CheckLogin(LoginInfo info)
        {
            if(info.Password == null && info.Email == null)
            {
                return BadRequest(); 
            }

            if(info.Password == "abc12345" && info.Email == "abc@abc.com")
            {
                return StatusCode(StatusCodes.Status200OK);
            }
            return BadRequest();
        }

    }
}
