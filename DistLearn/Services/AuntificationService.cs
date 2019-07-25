using DistLearn.DataBase;
using DistLearn.Models;
using System.Linq;

namespace DistLearn.Services
{
  public interface IAuntificationService
  {
    User addNewUser(User model);
    User findUserInDB(User model);
  }
  public class AuntificationService : IAuntificationService
  {
    private UserContext db = new UserContext();
    public User addNewUser(User model)
    {
      var userInDB = db.Users.Where(s => s.Login == model.Login).FirstOrDefault();
      if (userInDB == null)
      {
        db.Users.Add(new User() { Login = model.Login, Password = model.Password, Email = model.Email });
        db.SaveChanges();
        return db.Users.Where(s => s.Login == model.Login).FirstOrDefault();
      }
      else
      {
        return null;
      }
    }
    public User findUserInDB(User model){
      return db.Users.Where(s => s.Login == model.Login && s.Password == model.Password).FirstOrDefault();
    }
  }
}
