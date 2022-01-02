using Git_clone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WysiwygController : ControllerBase
    {
        private dataBaseContext _databaseContext;

        public WysiwygController(dataBaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet] // => "/" 
        public string Get(int id)
        {
            var page = _databaseContext.Pages.SingleOrDefault(x => x.pageId == id);
            Console.WriteLine(JsonConvert.SerializeObject(page));
            return JsonConvert.SerializeObject(page);
        }

        [HttpPost]
        public ActionResult InsertPage(Page htmlData)
        {
            if (htmlData.pageData != null)
            {
                Console.WriteLine(htmlData.pageData);
                var result = _databaseContext.Pages.SingleOrDefault(p => p.pageId == htmlData.pageId);
                if (result != null)
                {
                    result.pageData = htmlData.pageData;
                    _databaseContext.SaveChanges();
                    return StatusCode(StatusCodes.Status200OK);
                }
            }

            return BadRequest();
        }

    }
}
