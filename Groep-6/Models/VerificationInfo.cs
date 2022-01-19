namespace Groep6.Models
{
    //Class that defines the structure of the json object sent by the frontend at verification
    public class VerificationInfo
    {
        public string Email { get; set; }
        public string Code { get; set; }
    }
}