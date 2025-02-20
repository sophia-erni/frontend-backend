using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizApp.DTOs;
using QuizApp.Models;
using QuizApp.Repositories;

namespace QuizApp.Controllers
{
    [Route("api/")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IBaseRepository<Users> _usersRepository;
        private readonly IMapper _mapper;

        public UsersController(IBaseRepository<Users> usersRepository, IMapper mapper)
        {
            _usersRepository = usersRepository;
            _mapper = mapper;
        }

        [HttpGet("users")]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _usersRepository.GetAll(a => a.Question);
            var usersDto = _mapper.Map<List<GetUserDto>>(users);
            return Ok(usersDto);
        }
        [HttpGet("users/{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _usersRepository.Get(id);
            //if (user == null)
            //{
            //    return NotFound();
            //}
            var userDto = _mapper.Map<GetUserDto>(user);
            return Ok(userDto);
        }

        [HttpPost("users")]
        public async Task<IActionResult> CreateUser(CreateUser createUser)
        {
            var user = _mapper.Map<Users>(createUser);
            var createdUser = await _usersRepository.Add(user);
            var userDto = _mapper.Map<GetUserDto>(createdUser);
            return CreatedAtAction(nameof(GetUser), new { id = userDto.UserId }, userDto);
        }

        [HttpDelete("users/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _usersRepository.Get(id);
            if (user == null)
            {
                return NotFound();
            }
            await _usersRepository.Delete(id);
            return NoContent();
            
        }
    }

}
