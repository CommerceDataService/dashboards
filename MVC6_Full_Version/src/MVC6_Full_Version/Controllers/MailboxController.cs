using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC6_Full_Version.Controllers
{
    public class MailboxController : Controller
    {

        public IActionResult Inbox()
        {
            return View();
        }

        public IActionResult EmailView()
        {
            return View();
        }

        public IActionResult ComposeEmail()
        {
            return View();
        }

        public IActionResult EmailTemplates()
        {
            return View();
        }

        public IActionResult BasicActionEmail()
        {
            return View();
        }

        public IActionResult AlertEmail()
        {
            return View();
        }

        public IActionResult BillingEmail()
        {
            return View();
        }
    }
}
