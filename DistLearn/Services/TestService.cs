using DistLearn.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DistLearn.Services
{
  public class TestService
  {

    List<Test> _testList = new List<Test>()
    {

      new Test(){ Name="asdasd", Id=1},
      new Test(){ Name="asd", Id=2},
      new Test(){ Name="wasd", Id=3},
      new Test(){ Name="zxcv", Id=4},

    };
    public IEnumerable<Test> GetTestList()
    {
      return this._testList;
    }


    List<Question> questionsList = new List<Question>()
    {
      new Question() { Id = 1, Name = "Crhrthgf", testId = 1 },
      new Question() { Id = 2, Name = "Czxc", testId = 1  }
    };

    public IEnumerable<Question> GetQuestionsList()
    {
      return this.questionsList;
    }

    List<Answers> answersList = new List<Answers>()
    {
      new Answers() { Id = 1, Name = "wasd_true", isCorrect = true, questionId = 1},
      new Answers() { Id = 1, Name = "wasd_false", isCorrect = false, questionId = 1},
      new Answers() { Id = 1, Name = "wasd_false", isCorrect = false, questionId = 1},
      new Answers() { Id = 1, Name = "zxc_true", isCorrect = true, questionId = 2},
      new Answers() { Id = 1, Name = "zxc_false", isCorrect = false, questionId = 2}
    };

    public IEnumerable<Answers> GetAnswersList()
    {
      return this.answersList;
    }

  }
}
