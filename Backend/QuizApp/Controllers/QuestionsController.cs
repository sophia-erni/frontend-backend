using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizApp.Data;
using QuizApp.DTOs;
using QuizApp.Models;
using QuizApp.Repositories;

namespace QuizApp.Controllers
{
    [Route("api/")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IQuestionRepository _questionRepository;

        //private readonly IBaseRepository<Questions> _questionsRepository;

        private readonly IMapper _mapper;

        public QuestionsController(IQuestionRepository questionRepository, IMapper mapper)
        {
            _questionRepository = questionRepository;

            _mapper = mapper;
        }

        [HttpGet("questions")]
        [Authorize(Roles = "User,Admin")]
        public async Task<IActionResult> GetQuestions()
        {
            var questions = await _questionRepository.GetAllAsync();
            var questionsDto = _mapper.Map<List<GetQuestionDto>>(questions);
            return Ok(questionsDto);
        }

        [HttpGet("questions/{id}")]
        [Authorize(Policy = "User")]
              public async Task<IActionResult> GetQuestion(long id)
        {
            var question = await _questionRepository.GetByIdAsync(id);
            if (question == null)
            {
                return NotFound();
            }
            var questionDto = _mapper.Map<GetQuestionDto>(question);
            return Ok(questionDto);


        }

        [HttpPost("questions")]
        [Authorize(Policy = "User")]
        public async Task<IActionResult> CreateQuestion([FromBody] CreateQuestion createQuestion)
        {
            var question = _mapper.Map<Questions>(createQuestion);
            _questionRepository.Add(question);
            var questionDto = _mapper.Map<GetQuestionDto>(question);
            return CreatedAtAction(nameof(GetQuestion), new { id = questionDto.Id }, questionDto);
        }

        [HttpPut("questions/{id}")]
        public async Task<IActionResult> UpdateQuestion(long id, [FromBody] UpdateQuestion updateQuestion)
        {
            var question = await _questionRepository.GetByIdAsync(id);
            if (question == null)
            {
                return NotFound();
            }
            //_mapper.Map(updateQuestion, question);
            question.Question = updateQuestion.Question;
            question.Answer = updateQuestion.Answer;

            _questionRepository.Update(question);
            //var updatedQuestionDto = _mapper.Map<GetQuestionDto>(question);
            return NoContent();
        }

        [HttpDelete("questions/{id}")]
        public async Task<IActionResult> DeleteQuestion(long id)
        {
            var question = await _questionRepository.GetByIdAsync(id);
            if (question == null)
            {
                return NotFound("Question not found");
            }
            _questionRepository.Delete(id);
            return Ok("Question has been deleted");
        }
    }
}
