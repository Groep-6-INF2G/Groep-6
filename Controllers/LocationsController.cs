using Git_clone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        private dataBaseContext _databaseContext;

        public LocationsController(dataBaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpPost]

        //GET 
        public IEnumerable<Location> Get()
        {
            return _databaseContext.Locations;
        }
    }
}
