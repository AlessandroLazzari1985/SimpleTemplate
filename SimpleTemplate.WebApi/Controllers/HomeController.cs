using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace SimpleTemplate.WebApi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class HomeController : ControllerBase
	{
		private readonly string _version = "0.0.1";
		private readonly string _environment= "Development";

		[HttpGet, Route("Version")]	
		public string GetVersion()
		{
			return _version;
		}

		[HttpGet, Route("Environment")]
		public string GetEnvironment()
		{
			return _environment;
		}
	}
}
