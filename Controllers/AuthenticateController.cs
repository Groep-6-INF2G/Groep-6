using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Git_clone.Controllers
{
    [Authorize(Roles = "admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        [HttpGet]
        public ActionResult Authenticate()
        {
            if (User.Identity.IsAuthenticated)  
                 return Ok();
            return Unauthorized();
        }

    }
}
