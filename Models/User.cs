using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Git_clone.Models
{
    [Keyless]
    [Table("users")]
    public class user
    {
        public int userid { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}




    
