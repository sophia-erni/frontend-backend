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
    public class QuestionsController : ControllerBase
    {
        private readonly IBaseRepository<Questions> _questionsRepository;
        private readonly IMapper _mapper;

        public QuestionsController(IBaseRepository<Questions> questionsRepository, IMapper mapper)
        {
            _questionsRepository = questionsRepository;
            _mapper = mapper;
        }

        [HttpGet("questions")]
        public async Task<IActionResult> GetQuestions()
        {
            var questions = await _questionsRepository.GetAll();
            var questionsDto = _mapper.Map<List<GetQuestionDto>>(questions);
            return Ok(questionsDto);
        }

        [HttpGet("questions/{id}")]
        public async Task<IActionResult> GetQuestion(long id)
        {
            var question = await _questionsRepository.Get(id);
            if (question == null)
            {
                return NotFound();
            }
            var questionDto = _mapper.Map<GetQuestionDto>(question);
            return Ok(questionDto);


        }

        [HttpPost("questions")]
        public async Task<IActionResult> CreateQuestion([FromBody] CreateQuestion createQuestion)
        {
            var question = _mapper.Map<Questions>(createQuestion);
            var createdQuestion = await _questionsRepository.Add(question);
            var questionDto = _mapper.Map<GetQuestionDto>(createdQuestion);
            return CreatedAtAction(nameof(GetQuestion), new { id = questionDto.Id }, questionDto);
        }

        [HttpPut("questions/{id}")]
        public async Task<IActionResult> UpdateQuestion(long id, [FromBody] UpdateQuestion updateQuestion)
        {
            var question = await _questionsRepository.Get(id);
            if (question == null)
            {
                return NotFound();
            }
            _mapper.Map(updateQuestion, question);
            var updatedQuestion = await _questionsRepository.Update(question);
            var updatedQuestionDto = _mapper.Map<GetQuestionDto>(updatedQuestion);
            return NoContent();
        }

        [HttpDelete("questions/{id}")]
        public async Task<IActionResult> DeleteQuestion(long id)
        {
            var question = await _questionsRepository.Get(id);
            if (question == null)
            {
                return NotFound();
            }
            var questionDto = await _questionsRepository.Delete(id);
            return Ok(questionDto);
        }
    }
}
