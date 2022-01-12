﻿using Git_clone.Models;
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
    public class LoginController : ControllerBase
    {

        [HttpPost]
        public ActionResult CheckLogin(LoginInfo info)
        {
            if(info.Password == null && info.Email == null)
            {
                return BadRequest(); 
            }

            if(info.Password == "abc12345" && info.Email == "brentdbr@hotmail.nl")
            {
                int vCode = Mailsend.sendmail(info.Email);
                var person = Tuple.Create(info.Email, vCode, DateTime.Now.AddMinutes(10));
                Program.Checker.PeopleList.Add(person);
                return StatusCode(StatusCodes.Status200OK);
            }
            return BadRequest();
        }
    }
}