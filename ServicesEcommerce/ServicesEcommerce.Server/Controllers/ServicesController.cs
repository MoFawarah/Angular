using Microsoft.AspNetCore.Mvc;
using ServicesEcommerce.Server.DTOs;
using ServicesEcommerce.Server.Models;

namespace ServicesEcommerce.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public ServicesController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetAllServices")]
        public IActionResult GetAllServices()
        {
            var services = _db.Services.ToList();
            if (!services.Any())
            {
                return NotFound("No Services to display");
            }

            return Ok(services);

        }
        [HttpPost("addService")]
        public IActionResult addService([FromForm] ServiceRequestDTO serviceDTO)
        {
            var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Images");

            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            // Generate a unique filename using GUID
            var uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(serviceDTO.ServiceImage.FileName);
            var imageFilePath = Path.Combine(uploadFolder, uniqueFileName);

            using (var stream = new FileStream(imageFilePath, FileMode.Create))
            {
                serviceDTO.ServiceImage.CopyTo(stream); // Changed to synchronous for simplicity
            }

            var newService = new Service
            {
                ServiceName = serviceDTO.ServiceName,
                ServiceDescription = serviceDTO.ServiceDescription,
                ServiceImage = uniqueFileName, // Store the unique filename
            };

            _db.Services.Add(newService);
            _db.SaveChanges();
            return Ok();
        }

    }
}
