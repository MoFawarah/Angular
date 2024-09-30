using Microsoft.AspNetCore.Mvc;
using ServicesEcommerce.Server.Models;

namespace ServicesEcommerce.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {

        private readonly MyDbContext _db;
        public SubscriptionController(MyDbContext db)
        {
            _db = db;

        }

        [HttpGet]
        public IActionResult getSubscriptions()
        {
            var subscriptions = _db.Subscriptions.ToList();
            return Ok(subscriptions);
        }


    }
}
