using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Groep6.Models
{
    [Table("sections")]
    public class Section
    {
        public int sectionid { get; set; }
        public string sectiondata { get; set; }
        public int pageid { get; set; }
    }

}
