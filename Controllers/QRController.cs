using Microsoft.AspNetCore.Mvc;
using TwoFactorAuthNet;
using TwoFactorAuthNetSkiaSharpQrProvider;

namespace Git_clone.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QRController : Controller
    {
        [HttpGet]
        public string createQRSecretController()
        {
            // Though the default is an 80 bits secret (for backwards compatibility reasons) we 
            // recommend creating 160+ bits secrets (see RFC 4226 - Algorithm Requirements)
            var myTwoFactorAuth = new TwoFactorAuth("groep6", qrcodeprovider: new SkiaSharpQrCodeProvider());
            var secret = myTwoFactorAuth.CreateSecret(80);
          
            return myTwoFactorAuth.GetQrCodeImageAsDataUri("secretcode", secret); 
        }

       
    }
}
