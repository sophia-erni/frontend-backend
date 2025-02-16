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
    public class AnswersController : ControllerBase
    {
        private readonly IBaseRepository<Answers> _answersRepository;
        private readonly IMapper _mapper;
        public AnswersController(IBaseRepository<Answers> answersRepository, IMapper mapper)
        {
            _answersRepository = answersRepository;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetAnswers()
        {
            var answers = await _answersRepository.GetAll();
            var answersDto = _mapper.Map<List<GetAnswerDto>>(answers);
            return Ok(answersDto);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAnswer(int id)
        {
            var answer = await _answersRepository.Get(id);
            if (answer == null)
            {
                return NotFound();
            }
            var answerDto = _mapper.Map<GetAnswerDto>(answer);
            return Ok(answerDto);
        }
        [HttpPost]
        public async Task<IActionResult> CreateAnswer(CreateAnswer createAnswer)
        {
            var answer = _mapper.Map<Answers>(createAnswer);
            var createdAnswer = await _answersRepository.Add(answer);
            var answerDto = _mapper.Map<GetAnswerDto>(createdAnswer);
            return CreatedAtAction(nameof(GetAnswer), new { id = answerDto.AnswerId }, answerDto);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAnswer(int id, UpdateAnswer updateAnswer)
        {
            var answer = await _answersRepository.Get(id);
            if (answer == null)
            {
                return NotFound();
            }
            _mapper.Map(updateAnswer, answer);
            await _answersRepository.Update(answer);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnswer(int id)
        {
            var answer = await _answersRepository.Get(id);
            if (answer == null)
            {
                return NotFound();
            }
            await _answersRepository.Delete(id);
            return NoContent();
        }
    }
}
