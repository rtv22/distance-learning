using DistLearn.DataBase;
using DistLearn.Models;
using System.Linq;

namespace DistLearn.Services
{
  public interface IAuntificationService
  {
    User addNewUser(User model);
    User findRegUserInDB(User model);
  }
  public class AuntificationService : IAuntificationService
  {
    private UserContext db = new UserContext();
    public User addNewUser(User model)
    {
      var userInDB = db.Users.Where(s => s.Name == model.Name).FirstOrDefault();
      if (userInDB == null)
      {
        db.Users.Add(new User() { Name = model.Name, Password = model.Password });
        db.SaveChanges();
        return db.Users.Where(s => s.Name == model.Name).FirstOrDefault();
    }
      else
      {
        return null;
      }
    }
    public User findRegUserInDB(User model){
      return db.Users.Where(s => s.Name == model.Name && s.Password == model.Password).FirstOrDefault();
  }
  }
}
