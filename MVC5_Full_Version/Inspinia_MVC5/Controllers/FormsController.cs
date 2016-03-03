using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Inspinia_MVC5.Controllers
{
    public class FormsController : Controller
    {

        public ActionResult BasicFroms()
        {
            return View();
        }

        public ActionResult Advanced()
        {
            return View();
        }
     
        public ActionResult Wizard()
        {
            return View();
        }
      
        public ActionResult FileUpload()
        {
            return View();
        }

        [HttpPost]
        public ActionResult FileUploadHandler()
        {
            foreach (var fileKey in Request.Files.AllKeys)
            {
                var file = Request.Files[fileKey];
                try
                {
                    if (file != null)
                    {
                        var fileName = Path.GetFileName(file.FileName);
                        var path = Path.Combine(Server.MapPath("~/App_Data/uploads"), fileName);
                        file.SaveAs(path);
                    }
                }
                catch (Exception ex)
                {
                    return Json(new { Message = "Error in saving file" });
                }
            }
            return Json(new { Message = "File saved" });
        }
     
        public ActionResult TextEditor()
        {
            return View();
        }

        public ActionResult Markdown()
        {
            return View();
        }

    }
}