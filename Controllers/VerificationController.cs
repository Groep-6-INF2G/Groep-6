using Git_clone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Threading;
using Git_clone;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VerificationController : ControllerBase
    {

        [HttpPost]
        public async Task<ActionResult> CheckLoginAsync(VerificationInfo info)
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
                    var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, info.Email),
                    new Claim(ClaimTypes.Role, "admin"),
                };

                    var claimsIdentity = new ClaimsIdentity(
                        claims, CookieAuthenticationDefaults.AuthenticationScheme);

                    var authProperties = new AuthenticationProperties
                    {
                        //AllowRefresh = <bool>,
                        // Refreshing the authentication session should be allowed.

                        ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10),
                        // The time at which the authentication ticket expires. A 
                        // value set here overrides the ExpireTimeSpan option of 
                        // CookieAuthenticationOptions set with AddCookie.

                        //IsPersistent = true,
                        // Whether the authentication session is persisted across 
                        // multiple requests. When used with cookies, controls
                        // whether the cookie's lifetime is absolute (matching the
                        // lifetime of the authentication ticket) or session-based.

                        //IssuedUtc = <DateTimeOffset>,
                        // The time at which the authentication ticket was issued.

                        //RedirectUri = <string>
                        // The full path or absolute URI to be used as an http 
                        // redirect response value.
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
