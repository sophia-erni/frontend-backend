using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using QuizApp.DTOs;
using QuizApp.Models;
using QuizApp.Repositories;
using QuizApp.Services;

namespace QuizApp.Controllers
{
    [Route("api/")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IBaseRepository<Users> _usersRepository;
        private readonly TokenService _tokenService;

        public AuthenticationController(IBaseRepository<Users> usersRepository, TokenService tokenService, IMapper mapper)
        {
            _usersRepository = usersRepository;
            _tokenService = tokenService;

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var token = "string";
            var users = await _usersRepository.GetAll();
            var user = users.FirstOrDefault(u => u.Username == loginDto.Username && u.Password == loginDto.Password);

            if (user == null)
            {
                Console.WriteLine("Unauthorize");
                return Unauthorized();
            }
            if (user.Role == "Admin")
            {
                token = _tokenService.GenerateToken(user.Username, "Admin");
                

            }
            else
            {
                token = _tokenService.GenerateToken(user.Username, "User");
            }
            return Ok(new { Token = token });


        }
    }
}
