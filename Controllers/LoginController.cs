using Git_clone.Models;
using Git_clone.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections;
using Microsoft.EntityFrameworkCore;

namespace Git_clone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        DbSet<user> _userlist;

        public void receiveData(DbSet<user> userList)
        {
            _userlist = userList;
        }


      
        [HttpPost]
        public ActionResult CheckLogin(LoginInfo info)
        {
            if(info.Password != null && info.Email != null && _userlist != null) 
            {
                var list = _userlist.To;
                if (list.Contains(info.Password) && list.Contains(info.Email))
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

    }
}
