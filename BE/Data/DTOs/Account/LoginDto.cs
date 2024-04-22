using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BE.Data.DTOs.Account
{
    public class LoginDto
    {
        [Required]
        public string  UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}