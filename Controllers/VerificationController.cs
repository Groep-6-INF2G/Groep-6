using Git_clone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Threading;
using Git_clone;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VerificationController : ControllerBase
    {

        [HttpPost]
        public ActionResult CheckLogin(VerificationInfo info)
        {
            if (info.Email == null && info.Code == null)
            {
                return BadRequest();
            }
            if (info.Code == null)
            {
                int vCode = Mailsend.sendmail(info.Email);
                var person = Tuple.Create(info.Email, vCode, DateTime.Now.AddMinutes(10));
                Program.Checker.PeopleList.Add(person);
                return Ok();
            }
            foreach ( var people in Program.Checker.PeopleList)
            {
                if (info.Email == people.Item1 && info.Code == people.Item2.ToString())
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

    }
}
