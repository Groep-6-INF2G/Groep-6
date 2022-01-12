using Microsoft.AspNetCore.Mvc;
using TwoFactorAuthNet;
using TwoFactorAuthNetSkiaSharpQrProvider;
using Git_clone.Models;

namespace Git_clone.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QRController : Controller
    {
        TwoFactorAuth myTwoFactorAuth;
        string secret;

        public QRController()
        {
            this.myTwoFactorAuth = new TwoFactorAuth("groep6", qrcodeprovider: new SkiaSharpQrCodeProvider());
            this.secret =  myTwoFactorAuth.CreateSecret(80);
        }


        [HttpGet]
        public string getQR()
        {
            return myTwoFactorAuth.GetQrCodeImageAsDataUri("secretcode", secret);
        }



        [HttpPost]
        public IActionResult getResult(QRcode code)
        {
            if (myTwoFactorAuth.VerifyCode(this.secret, code.ToString()))
            {
                return Ok(code);
            }
            return Unauthorized();
        }
       
    }
}
