using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DistLearn.Models;
using Microsoft.AspNetCore.Mvc;
using DistLearn.Services;

namespace DistLearn.Controllers
{
    [Route("api/[controller]")]
    public class TestsController : Controller
    {

    [HttpGet("[action]")]
    public IEnumerable<Test> GetTests()
    {
      TestService list = new TestService();
      return list.GetTestList();
    }

    [HttpPost]
    public string PostData(string newName, int id)
    {
      List<Test> _testList = new List<Test>();
      return _testList[id].Name = newName;
    }
  }
}
