using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizApp.DTOs;
using QuizApp.Models;
using QuizApp.Repositories;

namespace QuizApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IBaseRepository<UserProfiles> _userProfileRepository;
        private readonly IMapper _mapper;

        public UserProfileController(IBaseRepository<UserProfiles> userProfileRepository, IMapper mapper)
        {
            _userProfileRepository = userProfileRepository;
            _mapper = mapper;

        }

        public async Task<IActionResult> GetUserProfile()
        {
            var userProfiles = await _userProfileRepository.GetAll(a=>a.Question);
            var userProfileDto = _mapper.Map<List<GetUserProfileDto>>(userProfiles);
            return Ok(userProfileDto);
        }

        public async Task<IActionResult> CreateUserProfile([FromBody] CreateUserProfile createUserProfile)
        {
            var userProfile = _mapper.Map<UserProfiles>(createUserProfile);
            var createdUser = await _userProfileRepository.Add(userProfile);
            var userProfileDto = _mapper.Map<GetUserProfileDto>(createdUser);
            return CreatedAtAction(nameof(GetUserProfile), new {id = userProfileDto.Id},userProfileDto);
        }
    }
}
