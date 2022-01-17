using Git_clone.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        private DatabaseContext _databaseContext;

        public LocationsController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet]

        //GET 
        public IEnumerable<Location> GetAll()
        {
            return _databaseContext.Locations;
        }

        [HttpGet("{coordsString}")]

        public IEnumerable<Location> GetClosest(string coordsString)
        {
            double[] coords = JsonSerializer.Deserialize<double[]>(coordsString);
            var closest = (from l in _databaseContext.Locations select l)
                                    .OrderBy(d => 3959 * Math.Acos(Math.Cos(Math.PI / 180 * coords[0]) * Math.Cos(Math.PI / 180 * d.lat) * Math.Cos(Math.PI / 180 * d.lon - Math.PI / 180 * coords[1]) + Math.Sin(Math.PI / 180 * coords[0]) * Math.Sin(Math.PI / 180 * d.lat)))
                                    .Take(3);
            return closest;
        }

    }
}
