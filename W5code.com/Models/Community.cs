using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace W5code.Models
{
    public class Community
    {
        public int ID              { get; set; }
        [Display(Name = "Post Date")]
        public DateTime PostDate   { get; set; }
        [Display(Name = "User Name")]
        public string Name         { get; set; }
        [Display(Name = "Questions")]
        public string Subject      { get; set; }
        [Display(Name = "Message")]
        public string BodyMessage  { get; set; }
    }
}
