using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DistLearn.Models
{
  public class Question
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int testId { get; set; }
    public Answers Answer { get; set; }
  }
}
