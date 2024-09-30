using Microsoft.AspNetCore.Mvc;
using ServicesEcommerce.Server.DTOs;
using ServicesEcommerce.Server.Models;

namespace ServicesEcommerce.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userSubsciptionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public userSubsciptionController(MyDbContext db)
        {
            _db = db;
        }
        [HttpPost]
        public IActionResult AddUserSubscription([FromBody] UserSubscriptiomDTO subDTO)
        {
            var subscription = _db.Subscriptions.Where(x => x.SubscriptionId == subDTO.SubscriptionId).FirstOrDefault();

            var amount = subscription.SubscriptionAmount;
            var startDate = DateOnly.FromDateTime(DateTime.Now);

            DateOnly endDate = DateOnly.FromDateTime(DateTime.Now);

            switch (amount)
            {
                case "9.99":
                    endDate = startDate.AddDays(7);
                    break;
                case "19.99":
                    endDate = startDate.AddDays(14);
                    break;
                case "29.99":
                    endDate = startDate.AddDays(30);
                    break;
                case "49.99":
                    endDate = startDate.AddDays(60);
                    break;
                default:
                    endDate = startDate.AddDays(1);
                    break;

            }

            var userSub = new ServiceSubscription
            {
                UserId = subDTO.UserId,
                SubscriptionId = subDTO.SubscriptionId,
                SubServiceId = subDTO.SubscriptionId,
                StartDate = startDate,
                EndDate = endDate,
            };


            _db.ServiceSubscriptions.Add(userSub);
            _db.SaveChanges();
            return Ok(amount);
        }
    }
}
