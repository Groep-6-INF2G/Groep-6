using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Git_clone.Models
{
    [Table("pagedata")]
    public class Page
    {
        public int pageId { get; set; }
        public string pageData { get; set; }

    }

}
