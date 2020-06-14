using System;
using System.Collections.Generic;
using System.Text;

namespace OxbridgeProject.Model
{
    class User
    {
        public string email { get; set; }
        public string password { get; set; }
        public string _id { get; set; }
        public string teamName { get; set; }
        public Boolean isBroadcasting { get; set; }
    }
}
