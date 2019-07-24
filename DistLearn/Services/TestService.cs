using DistLearn.DataBase.User;
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
      new Test(){ Name="asdasd1", Id=1},
      new Test(){ Name="asd2", Id=2},
      new Test(){ Name="wasd3", Id=3},
      new Test(){ Name="zxcv4", Id=4},
      new Test(){ Name="asdasd5", Id=5},
      new Test(){ Name="asd6", Id=6},
      new Test(){ Name="wasd7", Id=7},
      new Test(){ Name="zxcv8", Id=8},
    };
    public IEnumerable<Test> GetTestList()
    {
      return this._testList;
    }
  }
}
