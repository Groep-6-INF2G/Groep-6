using System;
using System.Net;
using System.Net.Mail;

namespace Groep6.Utils
{
    public class MailUtil
    {
        public static int SendMail(string emailadr) {
            Random rnd = new();
            int vCode = rnd.Next(100000, 999999);
            SmtpClient client = new() {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential() {
                    UserName = "starverifytotp@gmail.com",
                    Password = "inf2ggroep6"
                }
            };
            MailAddress senderEmail = new("starverifytotop@gmail.com", "Star Shl");
            try 
            {
                MailAddress recipientEmail = new(emailadr);
                MailMessage message = new()
                {
                    From = senderEmail,
                    Subject = $"Your verification code is {vCode}",
                    Body = $"Hello, your verification code is {vCode}. Please enter this code within the next 10 minutes. This code is not re-usable."
                };
                message.To.Add(recipientEmail);
                client.Send(message);
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
