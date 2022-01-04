using Git_clone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        [HttpPost]
        public ActionResult GetLocations()
        {
            return BadRequest();
        }
    }
}
