using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC6_Full_Version.Controllers
{
    public class EcommerceController : Controller
    {

        public IActionResult ProductsGrid()
        {
            return View();
        }

        public IActionResult ProductsList()
        {
            return View();
        }

        public IActionResult ProductEdit()
        {
            return View();
        }

        public IActionResult Orders()
        {
            return View();
        }

        public IActionResult ProductDetail()
        {
            return View();
        }

        public IActionResult Payments()
        {
            return View();
        }

        public IActionResult Cart()
        {
            return View();
        }
    }
}
