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

            CreateMap<Users, GetUserDto>()
                .ForMember(dest => dest.Questions, opt => opt.MapFrom(src => src.Question));
            CreateMap<CreateUser, Users>();
            CreateMap<UpdateUser, Users>();
            CreateMap<DeleteUser, Users>();
            CreateMap<GetUser, Users>();

        }
    }
}
