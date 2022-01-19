using Groep6.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace Groep6.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;

        public LocationsController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet]
        public IEnumerable<Location> GetAll()
        {
            return _databaseContext.Locations;
        }

        [HttpGet("{coordsString}")]
        public IEnumerable<Location> GetClosest(string coordsString)
        {
            double[] coords = JsonSerializer.Deserialize<double[]>(coordsString);
            var closest = (from loc in _databaseContext.Locations select loc)
                                    .OrderBy(dbLoc => 3959 * Math.Acos(Math.Cos(Math.PI / 180 * coords[0]) * Math.Cos(Math.PI / 180 * dbLoc.lat) * Math.Cos(Math.PI / 180 * dbLoc.lon - Math.PI / 180 * coords[1]) + Math.Sin(Math.PI / 180 * coords[0]) * Math.Sin(Math.PI / 180 * dbLoc.lat)))
                                    .Take(3);
            return closest;
        }

    }
}
