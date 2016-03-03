using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace MVC6_Seed_Project.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {

            ViewData["SubTitle"] = "Welcome in ASP.NET MVC 6 INSPINIA SeedProject ";
            ViewData["Message"] = "It is an application skeleton for a typical MVC 6 project. You can use it to quickly bootstrap your webapp projects.";

            return View();
        }

        public IActionResult Minor()
        {

            ViewData["SubTitle"] = "Simple example of second view";
            ViewData["Message"] = "Data are passing to view by ViewData from controller";

            return View();
        }

    }
}
