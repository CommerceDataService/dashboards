using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC6_Full_Version.Controllers
{
    public class GraphsController : Controller
    {

        public IActionResult Flot()
        {
            return View();
        }

        public IActionResult Morris()
        {
            return View();
        }

        public IActionResult Rickshaw()
        {
            return View();
        }

        public IActionResult Chartjs()
        {
            return View();
        }
        public IActionResult Chartist()
        {
            return View();
        }
        public IActionResult Peity()
        {
            return View();
        }

        public IActionResult Sparkline()
        {
            return View();
        }

        public IActionResult C3charts()
        {
            return View();
        }
    }
}
