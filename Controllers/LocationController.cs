using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Git_clone.Models;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    public class LocationsController : Controller
    {
        private DatabaseContext _databaseContext;

        public LocationsController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext; 
        }

        [HttpGet("")] // => "/" 
        
        //GET 
        public IEnumerable<Location> Get()
        {
            return _databaseContext.Locations;
        }
        



    }
}
