namespace ServicesEcommerce.Server.DTOs
{
    public class ServiceRequestDTO
    {
        public string? ServiceName { get; set; }

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }

    }
}
