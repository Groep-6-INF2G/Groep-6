using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Groep6.Models
{
    [Table("Locations")]
    [Keyless]
    public class Location
    {
        public int id { get; set; }
        public string city { get; set; }
        public string locationname { get; set; }
        public string street { get; set; }
        public string postcode { get; set; }
        public string openinghours { get; set; }
        public string particularities { get; set; }
        public double lat { get; set; }
        public double lon { get; set; }
    }

}
