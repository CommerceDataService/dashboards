using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC6_Full_Version.Controllers
{
    public class GalleryController : Controller
    {

        public IActionResult BasicGallery()
        {
            return View();
        }

        public IActionResult BootstrapCarusela()
        {
            return View();
        }

        public IActionResult SlickCarusela()
        {
            return View();
        }
    }
}
