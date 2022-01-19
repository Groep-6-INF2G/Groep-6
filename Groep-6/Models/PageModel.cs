using System.ComponentModel.DataAnnotations.Schema;

namespace Groep6.Models
{
    [Table("pagedata")]
    public class PageModel
    {
        public int pageId { get; set; }
        public string pageData { get; set; }

    }

}
