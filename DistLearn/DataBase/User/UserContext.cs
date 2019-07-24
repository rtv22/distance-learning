using Microsoft.EntityFrameworkCore;
using DistLearn.Models;

namespace DistLearn.DataBase
{
  public class UserContext : DbContext
  {
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=distLearnDb;Trusted_Connection=True;");
    }
  }
}
