using AutoMapper;
using QuizApp.DTOs;
using QuizApp.Models;

namespace QuizApp.MappingProfile
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            //CreateMap<Users, GetUserDto>()
            //    .ForMember(dest => dest.Questions, opt => opt.MapFrom(src => src.Question));
            CreateMap<Users, GetUserDto>();
            CreateMap<CreateUser, Users>();
            CreateMap<UpdateUser, Users>();
            CreateMap<DeleteUser, Users>();
            CreateMap<GetUser, Users>();

            CreateMap<Questions, GetQuestionDto>();
            CreateMap<CreateQuestion, Questions>();
            CreateMap<UpdateQuestion, Questions>();
            CreateMap<DeleteQuestion, Questions>();
            CreateMap<GetQuestion, Questions>();

            CreateMap<UserProfiles, GetUserProfileDto>()
                .ForMember(dest => dest.Questions, opt => opt.MapFrom(src => src.Question));
           CreateMap<CreateUserProfile, UserProfiles>();
            CreateMap<GetUserProfile, UserProfiles>();
        }
    }
}