using Microsoft.AspNetCore.Mvc;
using ServicesEcommerce.Server.DTOs;
using ServicesEcommerce.Server.Models;

namespace ServicesEcommerce.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UserController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost("CreateUser")]

        public IActionResult CreateUser([FromForm] UserRequestDTO userDTO)
        {
            var user = _db.Users.Where(u => u.Email == userDTO.Email).FirstOrDefault();
            if (user != null)
                return BadRequest("User Already Exist");


            var newUser = new User
            {
                UserName = userDTO.UserName,
                Email = userDTO.Email,
                Phone = userDTO.Phone,
                Address = userDTO.Address,
                PasswordHash = userDTO.PasswordHash,
            };




            _db.Users.Add(newUser);
            _db.SaveChanges();






            return Ok(newUser);
        }


        [HttpPost("Login")]
        public IActionResult Login([FromForm] UserLoginDTO userDTO)
        {
            var user = _db.Users.Where(u => u.Email == userDTO.Email).FirstOrDefault();

            if (user == null)
            {
                return BadRequest("User Not Found");
            }

            if (userDTO.PasswordHash != null && user.PasswordHash == userDTO.PasswordHash)
            {

                return Ok(user);
            }
            else
            {
                return BadRequest("Password Not Correct");
            }


        }
    }
}
