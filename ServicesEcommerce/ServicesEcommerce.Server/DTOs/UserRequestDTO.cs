namespace ServicesEcommerce.Server.DTOs
{
    public class UserRequestDTO
    {
        public string UserName { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string? Phone { get; set; }

        public string? Address { get; set; }

        public string PasswordHash { get; set; } = null!;

        //public bool? IsAdmin { get; set; }

        //public bool? IsSupplier { get; set; }


    }
}
