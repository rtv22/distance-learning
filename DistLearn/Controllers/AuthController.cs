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
  [ApiController]
  public class AuthController : Controller
  {
    private IAuntificationService auntificationService;

    public AuthController(IAuntificationService auntificationService)
    {
      this.auntificationService = auntificationService;
    }

    [HttpPost("addUserInDB")]
    public User PostAddUser (User model)
    {
      var result = auntificationService.addNewUser(model);
      return result;
    }

    [HttpPost("logIn")]
    public User logIn (User model)
    {
      return auntificationService.findRegUserInDB(model);
    }
  }
}
