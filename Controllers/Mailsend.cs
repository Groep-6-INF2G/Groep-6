using System;
using System.Net;
using System.Net.Mail;

namespace Git_clone
{
    class Mailsend
    {
        public static int sendmail(string emailadr) {
            Random rnd = new Random();
            int vCode = rnd.Next(100000, 999999);
            SmtpClient client = new SmtpClient() {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential() {
                    UserName = "",
                    Password = ""
                }
            };
            MailAddress FromEmail = new MailAddress("", "Star Shl");
            MailAddress ToEmail = new MailAddress(emailadr);
            MailMessage message = new MailMessage() {
                From = FromEmail,
                Subject = $"Your verification code is {vCode}",
                Body = $"Hello, your verification code is {vCode}. Please enter this code within the next 10 minutes. This code is not re-usable."
            };
            message.To.Add(ToEmail);
            Console.WriteLine("before sending");
            try 
            {
                client.Send(message);
                Console.WriteLine("SENT!");
                return vCode;
            }
            catch(Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex}");
                return 0;
            }
        }
    }
}
