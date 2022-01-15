using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Git_clone.Models
{
    [Table("locations")]
    [Keyless]
    public class Location
    {
        public string location { get; set; }
        public string locationdescription { get; set; }
        public string address { get; set; }
        public string postalcode { get; set; }
        public string locationtime { get; set; }
        public string appointmentdescription { get; set; }
    }

}
