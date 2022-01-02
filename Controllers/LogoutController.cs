using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    
    public class LogoutController : ControllerBase
    {
        [HttpGet]
        public void Logout()
        {
            HttpContext.Response.Cookies.Delete("id");
        }


    }
}
