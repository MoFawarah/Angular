using Microsoft.AspNetCore.Mvc;
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
    }
}
