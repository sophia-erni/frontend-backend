using AutoMapper;
using QuizApp.DTOs;
using QuizApp.Models;

namespace QuizApp.MappingProfile
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {

            CreateMap<Questions, GetQuestionDto>();
            CreateMap<CreateQuestion, Questions>();
            CreateMap<UpdateQuestion,Questions>();
            CreateMap<DeleteQuestion,Questions>();
            CreateMap<GetQuestion,Questions>();

            CreateMap<Answers, GetAnswerDto>();
            CreateMap<CreateAnswer, Answers>();
            CreateMap<UpdateAnswer,Answers>();
            CreateMap<DeleteAnswer,Answers>();
            CreateMap<GetAnswer,Answers>();
        }
    }
}
