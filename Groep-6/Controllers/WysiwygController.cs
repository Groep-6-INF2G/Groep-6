using Groep6.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace Groep6.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WysiwygController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;

        public WysiwygController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        //Return a section array or page
        [HttpGet]
        public string Get(int id)
        {
            var page = _databaseContext.Pages.SingleOrDefault(dbPage => dbPage.pageId == id);
            if (page.pageData == null)
            {
                var section = _databaseContext.Sections.Where(dbSection => dbSection.pageid == id);
                Console.WriteLine(JsonConvert.SerializeObject(section));
                return JsonConvert.SerializeObject(section);
            }
            Console.WriteLine(JsonConvert.SerializeObject(page));
            return JsonConvert.SerializeObject(page);
        }

        [Route("page")]
        [HttpPost]
        public StatusCodeResult InsertPage(PageModel htmlData)
        {
            if (htmlData.pageData != null)
            {
                Console.WriteLine(htmlData.pageData);
                var result = _databaseContext.Pages.SingleOrDefault(p => p.pageId == htmlData.pageId);
                if (result != null)
                {
                    result.pageData = htmlData.pageData;
                    _databaseContext.SaveChanges();
                    return Ok();
                }
            }

            return BadRequest();
        }

        [Route("section")]
        [HttpPost]
        public StatusCodeResult InsertSection(SectionModel htmlData)
        {
            if (htmlData.sectiondata != null)
            {
                Console.WriteLine(htmlData.sectiondata);
                var result = _databaseContext.Sections.SingleOrDefault(section => section.pageid == htmlData.pageid && section.sectionid == htmlData.sectionid);
                if (result != null)
                {
                    result.sectiondata = htmlData.sectiondata;
                    _databaseContext.SaveChanges();
                    return Ok();
                }
            }

            return BadRequest();
        }
    }
}
