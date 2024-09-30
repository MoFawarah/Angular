using Microsoft.AspNetCore.Mvc;
using ServicesEcommerce.Server.Models;

namespace ServicesEcommerce.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubServiceController : ControllerBase
    {

        private readonly MyDbContext _db;
        public SubServiceController(MyDbContext db)
        {
            _db = db;
        }


        [HttpGet("GetSubServiceById/{id}")]
        public IActionResult GetSubServiceById(int id)
        {
            var subService = _db.SubServices.Find(id);
            if (subService == null)
            {
                return NotFound("No subService found");
            }
            return Ok(subService);
        }


        [HttpGet("GetSubServiceByServiceId/{id}")]
        public IActionResult GetSubServiceByServiceId(int id)
        {
            var subServices = _db.SubServices.Where(s => s.ServiceId == id).ToList();
            if (subServices == null)
            {
                return NotFound("No subServices found");
            }
            return Ok(subServices);
        }
    }
}
