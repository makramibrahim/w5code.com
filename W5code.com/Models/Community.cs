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
        public string PostDate   { get; set; }
        [Display(Name = "User Name")]
        public string Name         { get; set; }
        [Display(Name = "Subject")]
        public string Subject      { get; set; }
        [Display(Name = "Question")]
        public string BodyMessage  { get; set; }
    }
}
