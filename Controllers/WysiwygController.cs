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
        private DatabaseContext _databaseContext;

        public WysiwygController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet] // => "/" 
        public string Get(int id)
        {
            var p = _databaseContext.Pages.SingleOrDefault(x => x.pageId == id);
            if (p.pageData == null)
            {
                var s = _databaseContext.Sections.Where(x => x.pageid == id);
                Console.WriteLine(JsonConvert.SerializeObject(s));
                return JsonConvert.SerializeObject(s);
            }
            Console.WriteLine(JsonConvert.SerializeObject(p));
            return JsonConvert.SerializeObject(p);
        }
        [Route("page")]
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
        [Route("section")]
        [HttpPost]
        
        public ActionResult InsertSection(Section htmlData)
        {
            if (htmlData.sectiondata != null)
            {
                Console.WriteLine(htmlData.sectiondata);
                var result = _databaseContext.Sections.SingleOrDefault(s => s.pageid == htmlData.pageid && s.sectionid == htmlData.sectionid);
                if (result != null)
                {
                    result.sectiondata = htmlData.sectiondata;
                    _databaseContext.SaveChanges();
                    return StatusCode(StatusCodes.Status200OK);
                }
            }

            return BadRequest();
        }
    }
}
