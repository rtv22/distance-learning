using DistLearn.DataBase.User;
using DistLearn.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DistLearn.Services
{
  public interface IAuntificationService
  {
    UserList addNewUser(UserList model);
  }
  public class AuntificationService : IAuntificationService
  {
    private UserContext db = new UserContext();
    public UserList addNewUser(UserList model)
    {
      var test = db.Users.Where(s => s.Name == model.Name).FirstOrDefault();
      if (test == null)
      {
        db.Users.Add(new UserList() { Name = model.Name, Password = model.Password });
        db.SaveChanges();
        return db.Users.Where(s => s.Name == model.Name).FirstOrDefault();
      }
      else
      {
        return null;
      }
    }
  }
}
