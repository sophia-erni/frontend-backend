using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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

        //[Authorize(Policy = "User")]
        [HttpGet("users")]
        [Authorize(Policy = "Admin")]

        public async Task<IActionResult> GetUsers()
        {
            //var users = await _usersRepository.GetAll(a => a.Question);
            var users = await _usersRepository.GetAll();

            var usersDto = _mapper.Map<List<GetUserDto>>(users);
            return Ok(usersDto);
        }

        [HttpGet("users/{id}")]
        //[Authorize]
        public async Task<IActionResult> GetUser(long id)
        {
            var user = await _usersRepository.Get(id);
            if (user == null)
            {
                return NotFound();
            }
            var userDto = _mapper.Map<GetUserDto>(user);
            return Ok(userDto);
        }


        [HttpPost("users")]
        //[Authorize(Policy = "Admin")]

        public async Task<IActionResult> CreateUser([FromBody] CreateUser createUser)
        {
            var user = _mapper.Map<Users>(createUser);
            var createdUser = await _usersRepository.Add(user);
            var userDto = _mapper.Map<GetUserDto>(createdUser);
            return CreatedAtAction(nameof(GetUser), new { id = userDto.Id }, userDto);
        }

        [HttpPut("users/{id}")]
        public async Task<IActionResult> UpdateUser(long id, [FromBody] UpdateUser updateUser)
        {
            var user = await _usersRepository.Get(id);
                if(user == null)
                {
                    return NotFound((nameof(UpdateUser)));
                }
            _mapper.Map(updateUser, user);
            var updatedUser = await _usersRepository.Update(user);
            var userDto = _mapper.Map<GetUserDto>(updatedUser);
            return Ok(userDto);
        }

        [HttpDelete("users/{id}")]
        [Authorize(Policy = "Admin")]

        public async Task<IActionResult> DeleteUser(long id)
        {
            var user = await _usersRepository.Get(id);
            if (user == null)
            {
                return NotFound();
            }
            var userDto = await _usersRepository.Delete(id);
            return Ok(userDto);
            
        }
    }

}
