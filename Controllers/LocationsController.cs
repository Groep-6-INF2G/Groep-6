using Git_clone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
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

        [HttpGet]

        //GET 
        public IEnumerable<Location> GetAll()
        {
            return _databaseContext.Locations;
        }

        [HttpGet("{postcode}")]

        public IEnumerable<Location> GetClosest(string postcode)
        {
            return _databaseContext.Locations;
        }

    }
}
