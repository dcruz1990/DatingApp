using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        // [StringLength(8, MinimumLength = 4, ErrorMessage = "La contrase;a no tiene la longitud requerida")]
        public string Password { get; set; }
    }
}