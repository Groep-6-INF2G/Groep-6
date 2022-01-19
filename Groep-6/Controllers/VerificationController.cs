using Groep6.Models;
using Groep6.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace Groep6.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VerificationController : ControllerBase
    {

        [HttpPost]
        public async Task<ActionResult> CheckLoginAsync(VerificationInfoModel veriInfo)
        {
            //Send an error when no information is provided
            if (veriInfo.Email == null && veriInfo.Code == null)
            {
                return BadRequest();
            }
            //Send a new email when no code is provided
            if (veriInfo.Code == null)
            {
                int vCode = MailUtil.SendMail(veriInfo.Email);
                var person = Tuple.Create(veriInfo.Email, vCode, DateTime.Now.AddMinutes(10));
                Program.Checker.PeopleList.Add(person);
                return Ok();
            }
            //Check all know codes for the provided code and user combination
            foreach ( var people in Program.Checker.PeopleList)
            {
                if (veriInfo.Email == people.Item1 && veriInfo.Code == people.Item2.ToString())
                {
                    var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Name, veriInfo.Email),
                        new Claim(ClaimTypes.Role, "admin"),
                    };

                    var claimsIdentity = new ClaimsIdentity(
                        claims, CookieAuthenticationDefaults.AuthenticationScheme);

                    var authProperties = new AuthenticationProperties
                    {
                        AllowRefresh = true,
                        ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10)
                    };

                    await HttpContext.SignInAsync(
                        CookieAuthenticationDefaults.AuthenticationScheme,
                        new ClaimsPrincipal(claimsIdentity),
                        authProperties);
                    return Ok();
                }
            }
            return BadRequest();
        }

    }
}
