using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC6_Full_Version.Controllers
{
    public class FormsController : Controller
    {

        public IActionResult BasicFroms()
        {
            return View();
        }

        public IActionResult Advanced()
        {
            return View();
        }

        public IActionResult Wizard()
        {
            return View();
        }

        public IActionResult FileUpload()
        {
            return View();
        }


        public IActionResult TextEditor()
        {
            return View();
        }

        public IActionResult Markdown()
        {
            return View();
        }
    }
}
